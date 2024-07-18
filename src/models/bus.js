'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Agency);
    }
  }
  bus.init({
    busnameplate: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    agencyid: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    capacity: {
      type:DataTypes.INTEGER,
      validate:{
        min:16,
      },
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'bus',
  });
  return bus;
};