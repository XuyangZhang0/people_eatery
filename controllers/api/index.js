const router = require('express').Router();
const userRoutes = require('./userRoutes');
const orderRoutes= require('./orderRoutes')
// const projectRoutes = require('./projectRoutes');
router.use('/orders',orderRoutes);
router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
