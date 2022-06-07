'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Computer.hasMany(models.Sale, {
        foreignKey: 'computerId'
      });

      Computer.hasMany(models.Rent, {
        foreignKey: 'computerId'
      });

      Computer.hasOne(models.Spec, {
        foreignKey: 'computerId'
      });
    }
  };
  Computer.init({
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    sale_price: DataTypes.INTEGER,
    rental_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Computer',
  });
  return Computer;
};