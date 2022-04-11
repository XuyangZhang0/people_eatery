const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model { }

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        guest_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'guest',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'order',
    }
);

module.exports = Order;
