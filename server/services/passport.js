const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
      const response = await amplifyApi.get(apiName, `${path}/${id}`);
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
          return done(null, results.user);
        } catch (err) {
          console.error('auth error', err);
          return done(null, false, 'unknown error');
        }
      }
    )
  );
};
