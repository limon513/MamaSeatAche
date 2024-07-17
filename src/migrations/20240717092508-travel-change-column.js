'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Travels','busId',{
      type:DataTypes.INTEGER,
      allowNull:false,
    });
    await queryInterface.changeColumn('Travels','departure_terminal_id',{
      type:DataTypes.INTEGER,
      allowNull:false,
    });
    await queryInterface.changeColumn('Travels','arrival_terminal_id',{
      type:DataTypes.INTEGER,
      allowNull:false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Travels','busId',{
      type:DataTypes.INTEGER,
      allowNull:true,
    });
    await queryInterface.changeColumn('Travels','departure_terminal_id',{
      type:DataTypes.INTEGER,
      allowNull:true,
    });
    await queryInterface.changeColumn('Travels','arrival_terminal_id',{
      type:DataTypes.INTEGER,
      allowNull:true,
    });
  }
};
