const User = require('./User');
const Category = require('./Category');
const MenuItem = require('./MenuItem');
const Guest = require('./Guest');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

MenuItem.belongsTo(Category, {
    foreignKey: 'category_id',
});

Category.hasMany(MenuItem, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
});

OrderItem.belongsTo(Order, {
    foreignKey: 'order_id',
});

Order.hasMany(OrderItem, {
    foreignKey: 'order_id',
    onDelete: 'SET NULL',
});

//one or many, technically many, but we don't require user login, so each order will be from a unique user
//In that sense, each guest would have one order.
Guest.hasOne(Order, {
    foreignKey: 'guest_id',
    onDelete: 'SET NULL',
});

Order.belongsTo(Guest, {
    foreignKey: 'guest_id',
});

// relationships among guests, order, order_items

module.exports = { User, Category, MenuItem, Guest, Order, OrderItem };
