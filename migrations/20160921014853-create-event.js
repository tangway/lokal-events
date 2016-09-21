'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING
      },

      date: {
        type: Sequelize.STRING, validate: {isDate: {msg: 'Invalid date'}}
      },

      venue: {
        type: Sequelize.STRING
      },

      time: {
        type: Sequelize.STRING
      },

      type: {
        type: Sequelize.STRING
      },

      description: {
        type: Sequelize.TEXT
      },

      imageurl: {
        type: Sequelize.STRING, validate: {isUrl: {msg: 'Invalid URL'}}
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('events');
  }
};
