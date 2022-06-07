'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //La parte belongsTo (pertenece a) S I E M P R E se anota en la tabla intermedia, que en este caso es esta misma, RENT.
      Rent.belongsTo(models.User, {
        //userId es la clave importada en este caso
        foreignKey: 'userId'
      });

      Rent.belongsTo(models.Computer, {
        //userId es la clave importada en este caso
        foreignKey: 'computerId'
      });
    }
  };
  Rent.init({
    userId: DataTypes.INTEGER,
    computerId: DataTypes.INTEGER,
    rent_date: DataTypes.STRING,
    max_rent_date: DataTypes.STRING,
    return_date: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};