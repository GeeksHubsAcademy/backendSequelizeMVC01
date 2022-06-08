const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');


//Endpoint-function links
router.get('/', UsersController.getUsers);
router.post('/register', UsersController.postUser);


//Export
module.exports = router;