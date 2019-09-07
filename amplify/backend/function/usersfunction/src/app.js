/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiBetaGraphQLAPIIdOutput = process.env.API_BETA_GRAPHQLAPIIDOUTPUT
var apiBetaGraphQLAPIEndpointOutput = process.env.API_BETA_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var bodyParser = require("body-parser");
var express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// var kms = new sdk.KMS({region:process.env.TABLE_REGION});
// var fs = require('fs');

// step 1: Upload the secret key using
// `aws kms encrypt --key-id some_key_id --plaintext "secretkey" --query CiphertextBlob --output text | base64 -D > ./encrypted-secret`

// step 2: retrieve encrypted key that was uploaded using step 1
// var secretPath = './encrypted-secret';
// var encryptedSecret = fs.readFileSync(secretPath);

// step 3: decrypt encrypted key
// kms.decrypt(params, function(err, data) {
//   if (err) console.log(err, err.stack);
//   else {
//     var private key = data['Plaintext'].toString();
//     console.log(decryptedSecret);
//   }
// });

// IMPT: this is a dummy encrypted secret to implement the
// jsonwebtoken flow. See Step 1 to 3 to upload this secret key

// Other useful resources: https://medium.com/@agungsantoso/how-to-store-secret-key-in-aws-lambda-6446847dceb9
const dangerousDummySecretKey = "dangerousDummySecretKey";

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// let tableName = "betausers";
let tableName = `User-${process.env.API_BETA_GRAPHQLAPIIDOUTPUT}`;
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "id";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/users";
const UNAUTH = "UNAUTH";
const hashKeyPath = "/:" + partitionKeyName;
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : "";
// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
};

app.post(path + `/login`, function(req, res) {
  const { email, password } = req.body;
  let queryParams = {
    TableName: tableName,
    FilterExpression: "#email = :emailval",
    ExpressionAttributeNames: {
      "#email": "email"
    },
    ExpressionAttributeValues: {
      ":emailval": email
    }
  };

  dynamodb.scan(queryParams, async (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err });
    } else {
      if (data.Items.length === 0) {
        res.json({ error: "User does not exist" });
        return;
      }
      const userData = data.Items[0];
      const compare = await bcrypt.compare(password, userData.password);
      if (!compare) {
        res.json({ error: "Invalid password" });
        return;
      }
      delete userData.password;
      // Replace dangerousDummySecretKey with your actual secret key
      // see above for how to store this secret key in aws lambda functions
      const token = jwt.sign({ _id: userData._id }, dangerousDummySecretKey);
      return res.json({ success: true, user: userData, token });
    }
  });
});

app.post(path, function(req, res) {
  const { email } = req.body;
  const queryParams = {
    TableName: tableName,
    FilterExpression: "#email = :emailval",
    ExpressionAttributeNames: {
      "#email": "email"
    },
    ExpressionAttributeValues: {
      ":emailval": email
    }
  };

  dynamodb.scan(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err });
    } else {
      if (data.Items.length !== 0) {
        res.json({ error: "Email already exists" });
        return;
      }

      let putItemParams = {
        TableName: tableName,
        Item: req.body
      };

      dynamodb.put(putItemParams, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.json({ error: err });
        } else {
          res.json({ success: true });
        }
      });
    }
  });
});

app.get(path + hashKeyPath, function(req, res) {
  const id = req.params.id;
  const token = req.apiGateway.event.queryStringParameters.token;
  if (!token) return res.status(401).json({ error: "Unauthorized access" });
  try {
    jwt.verify(token, dangerousDummySecretKey);
  } catch(err) {
    return res.status(401).json({ error: "Unauthorized access" });
  }

  let queryParams = {
    TableName: tableName,
    KeyConditionExpression: "#id = :idval",
    ExpressionAttributeNames: {
      "#id": "id"
    },
    ExpressionAttributeValues: {
      ":idval": id
    }
  };

  dynamodb.query(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err });
    } else {
      if (data.Items.length === 0) {
        res.json({ error: "User not found" });
        return;
      }
      const userData = data.Items[0];
      delete userData.password;
      res.json(userData);
    }
  });
});

// /************************************
//  * HTTP put method for update object *
//  *************************************/
//
// app.put(path, function(req, res) {
//   if (userIdPresent) {
//     req.body["userId"] =
//       req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
//   }
//
//   let putItemParams = {
//     TableName: tableName,
//     Item: req.body
//   };
//   dynamodb.put(putItemParams, (err, data) => {
//     if (err) {
//       res.statusCode = 500;
//       res.json({ error: err, url: req.url, body: req.body });
//     } else {
//       res.json({ success: "put call succeed!", url: req.url, data: data });
//     }
//   });
// });
//

//
// /**************************************
//  * HTTP remove method to delete object *
//  ***************************************/
//
// app.delete(path + "/object" + hashKeyPath + sortKeyPath, function(req, res) {
//   var params = {};
//   if (userIdPresent && req.apiGateway) {
//     params[partitionKeyName] =
//       req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
//   } else {
//     params[partitionKeyName] = req.params[partitionKeyName];
//     try {
//       params[partitionKeyName] = convertUrlType(
//         req.params[partitionKeyName],
//         partitionKeyType
//       );
//     } catch (err) {
//       res.statusCode = 500;
//       res.json({ error: "Wrong column type " + err });
//     }
//   }
//   if (hasSortKey) {
//     try {
//       params[sortKeyName] = convertUrlType(
//         req.params[sortKeyName],
//         sortKeyType
//       );
//     } catch (err) {
//       res.statusCode = 500;
//       res.json({ error: "Wrong column type " + err });
//     }
//   }
//
//   let removeItemParams = {
//     TableName: tableName,
//     Key: params
//   };
//   dynamodb.delete(removeItemParams, (err, data) => {
//     if (err) {
//       res.statusCode = 500;
//       res.json({ error: err, url: req.url });
//     } else {
//       res.json({ url: req.url, data: data });
//     }
//   });
// });

app.listen(3000, function() {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
