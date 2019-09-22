var express = require('express');
var router = express.Router();
const main_db = require('../db/main_db');

console.log('Loading work ..');

// backend API about Work

/*
* Description: Register work
* Function: Write work data into DB
* TransferType: POST
* Input Value:
    ...
* Return Value:
    ...
*/
router.post('/register_work', (req, res, next) => {
  res.send('success to register work');
});

module.exports = router;
