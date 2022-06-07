
const { User } = require('../models/index');

//UserController object declaration
const UsersController = {};

UsersController.getUsers = (req, res) => {
    User.findAll()
    .then(data => {
    
        res.send(data)
    });
};

//Export
module.exports = UsersController;