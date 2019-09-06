const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const apiName = 'betaapi';
const path = '/users';

module.exports = amplifyApi => {
  passport.serializeUser((user, done) => {
    console.info('serializeUser', user);
    done(null, user.id); // saved a cookie with id = user.id
  });

  passport.deserializeUser(async (id, done) => {
    console.log('deserializeUser', id);
    try {
      // TODO: replace dangerousDummySecretKey with your secret key
      // 1. Never commit and store secret keys in your repo
      // 2. If you are storing your key in a config file, ensure it is in gitignore
      // 3: Secret keys can be injected via ENV variables from a production environment
      // 4: See https://medium.com/poka-techblog/the-best-way-to-store-secrets-in-your-app-is-not-to-store-secrets-in-your-app-308a6807d3ed
      const dangerousDummySecretKey = 'dangerousDummySecretKey';
      const token = jwt.sign({ _id: id }, dangerousDummySecretKey);
      const params = {
        // To retrieve token via headers, you need to do additional api gateway setup
        // see https://aws-amplify.github.io/docs/js/api#get
        // headers: {
        //   'authorization': token
        // }
        queryStringParameters: {
          token
        }
      };
      const response = await amplifyApi.get(apiName, `${path}/${id}`, params);
      if (response.error) {
        console.error('deserialize error', response.error);
        return;
      }
      done(null, response);
      console.info('response', response);
    } catch (err) {
      console.error('deserialize error', err);
    }
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const postData = {
            body: { email, password },
            headers: {}
          };
          const results = await amplifyApi.post(
            apiName,
            `${path}/login`,
            postData
          );
          if (results.error) {
            return done(null, false, results.error);
          }
          return done(null, { ...results.user, token: results.token });
        } catch (err) {
          console.error('auth error', err);
          return done(null, false, 'unknown error');
        }
      }
    )
  );
};
