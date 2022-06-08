const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

const ComputersController = require('../controllers/ComputersController');


//Endpoint-function links
router.get('/', ComputersController.getComputers);
router.post('/register', ComputersController.postComputer);


//Export
module.exports = router;