'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      busnameplate: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      agencyid: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate:{
          min:16,
        },
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
    await queryInterface.dropTable('buses');
  }
};