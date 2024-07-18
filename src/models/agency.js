"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.bus,{
        foreignKey:'agencyid',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      });
    }
  }
  Agency.init(
    {
      agencyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      TLNno: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
      }
    },
    {
      sequelize,
      modelName: "Agency",
    },
  );
  return Agency;
};
