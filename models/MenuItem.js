const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MenuItem extends Model { }

MenuItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isDecimal: true,
            },
        },
        in_stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu_item',
    }
);

module.exports = MenuItem;
