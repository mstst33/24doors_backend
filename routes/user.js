var express = require('express');
var router = express.Router();
const main_db = require('../private/DB/main_db');

console.log('Loading user ..');

// backend API about User

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
