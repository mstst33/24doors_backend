const knex = require('knex');
const main_db = knex({
  client: 'pg',
  connection:
  {
    host : 'localhost', // public: 99.79.177.225, internal: 172.26.14.106
    user : 'postgres',
    password : 'postgres',
    database : 'postgres'
  }
});

module.exports = main_db;