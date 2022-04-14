const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderItem extends Model { }

OrderItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        served: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        order_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'order',
                key: 'id',
            },
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'menu_item',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_item',
    }
);

module.exports = OrderItem;
