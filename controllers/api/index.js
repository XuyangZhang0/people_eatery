const router = require('express').Router();
const userRoutes = require('./userRoutes');
const orderRoutes= require('./orderRoutes')
const orderItemRoutes = require('./orderItemRoutes');

router.use('/orders',orderRoutes);
router.use('/users', userRoutes);
router.use('/orderitems', orderItemRoutes);


module.exports = router;
