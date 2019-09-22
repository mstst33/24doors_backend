require('dotenv').config();

// In Mac or Linux, ex) export NODE_ENV=production
// In Windows, ex) set NODE_ENV=production

module.exports = {
  development: {
    client: 'pg',
    connection:
    {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_POSTGRES_NAME,
      ssl : false
    }
  },

  production: {
    client: 'pg',
    connection:
    {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_POSTGRES_NAME,
      ssl : true
    }
  }
};
