'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Terminals',{
      fields:['cityid'],
      type:'foreign key',
      name:'city-terminal-const',
      references:{
        table:'Cities',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Terminals','city-terminal-const');
  }
};
