var express = require('express');
var router = express.Router();
const main_db = require('../private/DB/main_db');

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
  main_db.insert({ id: 1 })
  .into('Test')
  .then(function(data)
  {
    console.log('Data: ', data);
  })
  .catch(function(err)
  {
    console.log(err);
  });
});

module.exports = router;
