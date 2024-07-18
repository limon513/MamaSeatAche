'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('buses',{
      fields:['agencyid'],
      type:'foreign key',
      name:'bus-agency-const',
      references:{
        table:'Agencies',
        field:'id',
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
    });
    await queryInterface.changeColumn('buses','busnameplate',{
      type:DataTypes.STRING,
      unique:true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('buses','bus-agency-const');
  }
};
