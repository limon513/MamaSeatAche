'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Travels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      busId: {
        type: Sequelize.INTEGER
      },
      departure_terminal_id: {
        type: Sequelize.INTEGER
      },
      arrival_terminal_id: {
        type: Sequelize.INTEGER
      },
      departure_time: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      arrival_time: {
        type: Sequelize.DATE
      },
      ticket_price: {
        type: Sequelize.INTEGER,
        allowNull:false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Travels');
  }
};