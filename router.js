
//Imports
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
const RentsRouter = require('./views/RentsRouter');
const SalesRouter = require('./views/SalesRouter');
const SpecsRouter = require('./views/SpecsRouter');
const ComputersRouter = require('./views/ComputersRouter');

//Endpoints roots definition
router.use('/users', UsersRouter);
// router.use('/rents', RentsRouter);
// router.use('/sales', SalesRouter);
// router.use('/specs', SpecsRouter);
// router.use('/computers', ComputersRouter);

//Export
module.exports = router;