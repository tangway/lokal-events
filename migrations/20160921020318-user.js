'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        email: {
          type: Sequelize.STRING
        },

        password: {
          type: Sequelize.STRING, validate: {len: {args: [8, 99], msg: 'Password must be between 8 and 99 characters'}}
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

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
