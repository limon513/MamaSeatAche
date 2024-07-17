'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Travels',
      {
        fields:['departure_terminal_id'],
        type:'foreign key',
        name:'d-travel-terminal-const',
        references:{
          table:'Terminals',
          field:'id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      }
    );

    await queryInterface.addConstraint('Travels',{
      fields:['arrival_terminal_id'],
        type:'foreign key',
        name:'a-travel-terminal-const',
        references:{
          table:'Terminals',
          field:'id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Travels','d-travel-terminal-const');
    await queryInterface.removeConstraint('Travels','a-travel-terminal-const');
  }
};
