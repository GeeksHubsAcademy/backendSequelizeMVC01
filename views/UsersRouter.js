const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');


//Endpoint-function links
router.get('/', UsersController.getUsers);
router.post('/', UsersController.writeRaw);
router.post('/register', UsersController.userRegister);
router.post('/login', UsersController.login);


//Export
module.exports = router;