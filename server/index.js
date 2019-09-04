const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const aws_exports = require('./config/aws-exports');
const Amplify = require('aws-amplify').default;
Amplify.configure(aws_exports);

const { API } = Amplify;

const keys = require('./config/keys');

require('./services/passport');

const bodyParser = require('body-parser');

const app = express();

// handles incoming POST request and assign it to req.body
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app, API);

const PORT = process.env.PORT || 5000;
console.log(`Listening on PORT ${PORT}`);
app.listen(PORT);
