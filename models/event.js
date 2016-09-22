'use strict';
module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define('event', {

    title: DataTypes.STRING,
    date: DataTypes.STRING,
    venue: DataTypes.STRING,
    time: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageurl: DataTypes.STRING,
    userID:DataTypes.STRING
  },

  {
    classMethods: {
      associate: function(models) {
         models.event.belongsTo(models.user, {foreignKey:"userID"})

      }
    }
  });
  return event;
};
