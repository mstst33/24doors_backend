var db = require('./db/api');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

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
    callbackURL: "http://127.0.0.1:1337/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    // Query the database to find user record associated with this
    // google profile, then pass that object to done callback
    db.findUserById(profile.id).then((id) => {
      if (id) {
        return done(null, profile);
      } else {
        db.createUser(profile.id)
          .then((id) => {
            return done(null, profile);
          });
      }
    });
  })
);

module.exports = { passport: passport };
