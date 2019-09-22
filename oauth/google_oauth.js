require('dotenv').config();

var db_api = require('../db/api');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GoogleCallbackURL = 'http://' + process.env.BACKEND_HOST + ':' + process.env.BACKEND_PORT + '/auth/google/callback';

console.log('CallBackURL: ', GoogleCallbackURL);

passport.serializeUser((user, done) => {
  // done(null, user.id);
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // Users.findById(obj, done);
  done(null, obj);
});

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: GoogleCallbackURL
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    // Query the database to find user record associated with this
    // google profile, then pass that object to done callback
    db_api.findUserById(profile.id).then((id) => {
      if (id) {
        return done(null, profile);
      } else {
        db_api.createUser(profile.id)
          .then((id) => {
            return done(null, profile);
          });
      }
    });
  })
);

module.exports = { passport: passport };
