'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //Establezco la relacion de user (este archivo) con la tabla Venta (Sale)
      User.hasMany(models.Sale, {
        //En este caso, foreignKey hace referencia a como se llama la clave de user en la tabla Sale
        foreignKey: 'userId'
      });

            //Establezco la relacion de user (este archivo) con la tabla Venta (Rent)
      User.hasMany(models.Rent, {
        //En este caso, foreignkey hace referencia a como se llama la clave de user en la tabla Rent
        foreignKey: 'userId'
      });
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    payment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};