const sequelize = require('../config/connection');
const { User, Category, MenuItem } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const menuitemData = require('./menuData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData,{returning:true});

  const menu_items = await MenuItem.bulkCreate(menuitemData,{individualHooks: true,returning:true});


  process.exit(0);
};

seedDatabase();
