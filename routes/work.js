var express = require('express');
var router = express.Router();

/*
* Description: Register work
* Function: Write work data into DB
* TransferType: POST
* Input Value:
    ...
* Return Value:
    ...
*/
router.post('/register_work', function(req, res, next) {
  res.send('success to register work');
});

module.exports = router;
