var express = require('express');
var router = express.Router();
var oauth = require('../oauth/google_oauth');

// GET login page
router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

// GET route for when you click on login - passport authenticates through google
router.get('/auth/google',
  oauth.passport.authenticate('google', { scope: ['openid email profile'] }));

// If successful auth - redirects to home page, if not - redirects to /login
router.get('/auth/google/callback',
  oauth.passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  (req, res) => {
    // Authenticated successfully
    res.redirect('/');
  });

// GET logout route - will sign person out of session
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Route middleware to ensure user is authenticated.
 const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
