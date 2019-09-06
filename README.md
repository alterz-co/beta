# SG Tennis Beta v1

SG Tennis Beta v1

- [Amplify Setup](#amplify-setup) – Setting up amplify for this project
- [Dev Setup](#dev-setup) – Getting the project running on your local machine
- [Miscellaneous](#miscellaneous) – Other important notes

SG Tennis Beta v1 is developed and tested on macOS.<br>
If something doesn’t work, please [file an issue](https://github.com/alterz-co/beta/issues).<br>

### Get Started Immediately

To run this project, you need to first configure amplify and push the resources in this project to your 
environment to your aws environment.

## Amplify Setup

**Configuring Amplify** (Connecting to your environment). 

Step 1:
In your project root, run these commands.

```sh
npm install -g @aws-amplify/cli
amplify configure
amplify init
```

Follow the instructions, enter your AWS console credentials and select an existing environment or configure a new environment.
If you wish to use an existing environment, contact the administrators of this project to obtain the AWS credentials. 

Step 2:

In your project root, run these commands.

```sh
amplify status
amplify push
```
`amplify status` displays the amplify updates to deploy to your AWS backend. `amplify push` updates the backend
with the lambda, apis, storage and other aws meta information in this repository. 
Ensure your have run npm install in each of the lambda function express directories prior to push. See [Dev Setup](#dev-setup).
After you have run `amplify push`,copy the just the json contents of `src\aws-exports.js` and paste it into `server\config\aws-exports.js`.
Just the json contents, do not modify the `module.exports{}` declaration. 

If you wish to use an existing an existing table in your `dynamodb`, ensure that the `tableName` in your 
lambda function matches your existing tables. 

## Dev Setup

**Running the project locally**

Run npm install in your `beta`, `beta/server` and `beta/amplify/backend/function/[name]function` directories.
In your project root, after installing the dependencies, run this command.

```sh
npm run dev
```

This starts up your client and your express server on your machine on port 3000 and port 5000 respectively. 

## Miscellaneous

**Other important notes**

To secure the endpoints in this server, we make use of a library called `jsonwebtoken`. To verify a user 
access to protected routes, we utilise symmetric key encryption.

Our local express server will encrypt the user id using a secret key after the user id has been deserialize
by `passport` to generate an authorization token. The lambda function will receive this token and verify this 
token using the same secret key. 

For security purposes, it is **critical** that you replace all instances of `dangerousDummySecretKey` in the project with your 
actual secret key prior to production deployment. Detailed comments are included to suggest solutions and alternatives to store the secret keys.


Made with lots of ❤️ and ☕ by Ziyi
