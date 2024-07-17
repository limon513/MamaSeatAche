'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Travels',{
      fields:['busId'],
      type:'foreign key',
      name:'bus-travel-const',
      references:{
        table:'buses',
        field:'id',
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Travels','bus-travel-const');
  }
};
