var express = require('express');
var router = express.Router();

// backend API about user

/*
* Description: Register user
* Function: Write user data into DB
* TransferType: POST
* Input Value:
  ...
* Return Value:
  ...
*/
router.post('/register_user', function(req, res, next) {
  res.send('success to register user');
});

module.exports = router;
