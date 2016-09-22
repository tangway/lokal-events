'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('events', 'userID', Sequelize.STRING);

  },


  down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('events', 'userID');

  }
};
