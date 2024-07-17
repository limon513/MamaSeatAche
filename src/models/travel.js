'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Travel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Travel.init({
    busId: DataTypes.INTEGER,
    departure_terminal_id: DataTypes.INTEGER,
    arrival_terminal_id: DataTypes.INTEGER,
    departure_time: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    arrival_time: DataTypes.DATE,
    ticket_price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Travel',
  });
  return Travel;
};