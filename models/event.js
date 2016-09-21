'use strict';
module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define('event', {

    title: DataTypes.STRING,
    date: DataTypes.STRING,
    venue: DataTypes.STRING,
    time: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    imageurl: DataTypes.STRING
  },

  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return event;
};
