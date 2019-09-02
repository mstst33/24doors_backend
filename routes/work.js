var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')();
var cn = 
{
  host: 'localhost', // public: 99.79.177.225, internal: 172.26.14.106
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres'
};

var db = pgp(cn);

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
  db.any('select * from user')
      .then(function(data)
      {
        console.log('Data: ', data.value);
      })
      .catch(function(error)
      {
        console.log('Error: ', error);
      });
});

module.exports = router;
