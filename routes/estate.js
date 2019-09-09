var express = require('express');
var router = express.Router();
const main_db = require('../db/main_db');

console.log('Loading estate ..');

// backend API about Estate

/*
* Description: Register estate
* Function: Write user data into DB
* TransferType: POST
* Input Value:
  ...
* Return Value:
  ...
*/
router.post('/register_estate', function(req, res, next) {
  res.send('success to register estate');
});

module.exports = router;
