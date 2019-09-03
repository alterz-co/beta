const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
    function(username, password, done) {
        // make a rest call
    }
));
