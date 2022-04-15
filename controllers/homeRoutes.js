const router = require('express').Router();
const {  User, Guest, MenuItem, Order, Category, OrderItem } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const categoryData = await Category.findAll({
      include: [ { model: MenuItem} ],
    });
    

    // Serialize data so the template can read it
    const menu = categoryData.map((menuItem) => menuItem.get({ plain: true }));
    console.log(menu);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      menu,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/menuItem/:id', async (req, res) => {
//   try {
//     const menuData = await MenuItem.findByPk(req.params.id, {
//       include: [ {model: Guest}, { model: User, attributes: ['name'],},],
//     });

//     const menuItem = menuData.get({ plain: true });

//     res.render('menuItem', {
//       ...menuItem,
//       // logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/menuItem/:name', async (req, res) => {
//   try {
//     const menuData = await MenuItem.findByPk(req.params.name, {
//       include: [ {model: Guest}, { model: User, attributes: ['name'],},],
//     });

//     const menuItem = menuData.get({ plain: true });

//     res.render('menuItem', {
//       ...menuItem,
//       // logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/orders', withAuth, async (req, res) => {
  console.log("hit get orders routes");

 
    // Get all orders with
    const orderData = await Order.findAll({
      include: [
        // {
        //   model: Guest,
        // },
        {
          model: OrderItem,
          include: [{ model: MenuItem }],
        },
      ],
    });

console.log("orderData below");
console.log(orderData);
    // Serialize data so the template can read it
    const orders = orderData.map((order) => order.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('orders', {
      orders, 
      logged_in: req.session.logged_in
    });
  
});
router.get('/cart', (req, res) => {
  // console.log("cart attempted");
  res.render('cart');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
