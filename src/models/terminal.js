'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terminal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Cities,{
        foreignKey:'cityid',
        onDelete:'cascade',
        onUpdate:'cascade',
      });
    }
  }
  Terminal.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    address: {
      type:DataTypes.STRING,
    },
    cityid:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Terminal',
  });
  return Terminal;
};