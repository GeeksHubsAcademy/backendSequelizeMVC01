
const { User } = require('../models/index');

//UserController object declaration
const UsersController = {};

UsersController.getUsers = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    User.findAll()
    .then(data => {
    
        res.send(data)
    });
};

UsersController.postUser = async (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let dni = req.body.dni;
    let phone = req.body.phone;
    let age = req.body.age;
    let address = req.body.address;
    let payment = req.body.payment;

    User.create({
        name: name,
        email: email,
        dni: dni,
        phone: phone,
        age: age,
        address: address,
        payment: payment
    }).then(user => {
        res.send(`${user.name}, you have been registered succesfully`);

    }).catch((error) => {
        res.send(error);
    });


};

//Export
module.exports = UsersController;