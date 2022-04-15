const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model { }

Guest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // table_number: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
       
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'guest',
    }
);

module.exports = Guest;
