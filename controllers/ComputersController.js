
const { Computer } = require('../models/index');

//UserController object declaration
const ComputersController = {};

ComputersController.getComputers = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Computer.findAll()
    .then(data => {
    
        res.send(data)
    });
};

ComputersController.postComputer = async (req, res) => {

    let model = req.body.model;
    let brand = req.body.brand;
    let sale_price = req.body.sale_price;
    let rental_price = req.body.rental_price;

    Computer.create({
        model: model,
        brand: brand,
        sale_price: sale_price,
        rental_price: rental_price
    }).then(computer => {
        res.send(`${computer.model}, you have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });


};

//Export
module.exports = ComputersController;