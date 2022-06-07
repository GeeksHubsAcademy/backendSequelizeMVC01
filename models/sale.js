'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //La parte belongsTo (pertenece a) S I E M P R E se anota en la tabla intermedia, que en este caso es esta misma, SALE.
      Sale.belongsTo(models.User, {
        //userId es la clave importada en este caso
        foreignKey: 'userId'
      });

      Sale.belongsTo(models.Computer, {
        //userId es la clave importada en este caso
        foreignKey: 'computerId'
      });

    }
  };
  Sale.init({
    userId: DataTypes.INTEGER,
    computerId: DataTypes.INTEGER,
    sale_date: DataTypes.STRING,
    return: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};