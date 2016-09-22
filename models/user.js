'use strict';
var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {

    email: {
      type: DataTypes.STRING,
      validate: {isEmail: true}
    },

    password: DataTypes.STRING,

  }, {
    hooks: {
      beforeCreate: function(createdUser, options, cb) {
        // hash the password
        var hash = bcrypt.hashSync(createdUser.password, 10);
        // store the hash as the user's password
        createdUser.password = hash;
        // continue to save the user, with no errors
        cb(null, createdUser);
      }
    },

    classMethods: {
      associate: function(models) {
        models.user.hasMany(models.event, {foreignKey:"userID"});
      },
    },
    instanceMethods: {
    validPassword: function(password) {
      // return if the password matches the hash
      return bcrypt.compareSync(password, this.password);
    },
    toJSON: function() {
      // get the user's JSON data
      var jsonUser = this.get();
      // delete the password from the JSON data, and return
      delete jsonUser.password;
      return jsonUser;
    }
  }
  });
  return user;
};
