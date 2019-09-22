require('dotenv').config();

var environment = process.env.NODE_ENV || 'development';
var db_config = require('./knex.js')[environment];

console.log('NODE_ENV: ', environment);
console.log('HOST: ', db_config.connection.host);

// Set DB to connect
db_config.connection.database = process.env.DB_POSTGRES_NAME;
const main_db = require('knex')(db_config);

module.exports = main_db;