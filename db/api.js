var main_db = require('./main_db');

module.exports = {
  // For test api
  InsertData: function(id)
  {
    main_db.insert({ googleId: id })
    .into('users')
    .then(function(data)
    {
      console.log('Data: ', data);
    })
    .catch(function(err)
    {
      console.log(err);
    });
  },

  // For test api
  GetData: function(id)
  {
    return main_db.select()
    .from('users')
    .where({ googleId : id })
  },

  findUserById: function(profileId) {
    return main_db('users')
      .select()
      .where({ googleId: profileId })
      .first();
  },

  createUser: function(profileId) {
    return main_db('users')
      .insert({ googleId: profileId });
  }
};
