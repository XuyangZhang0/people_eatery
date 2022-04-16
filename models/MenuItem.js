const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const axios = require('axios');
require('dotenv').config();

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
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_150.jpg",
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },

    },
    {
        hooks: {
            beforeCreate: async (newMenuItem) => {
                // newUserData.password = await bcrypt.hash(newUserData.password, 10);
console.log("hook entered");
                let queryKeyword = newMenuItem.name.replace(" ", "+");
                let config = {
                    method: 'get',
                    url: `https://pixabay.com/api/?key=${process.env.PixbayKey}&q=${queryKeyword}&image_type=photo&safesearch=true&per_page=3&category=food`,

                };

                await axios(config)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
                        if (response.data.hits.length>0 && response.data.hits[0].previewURL) {
                            let url = response.data.hits[0].previewURL;
                            newMenuItem.imageUrl = url;
                            
                        }


                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                return newMenuItem;
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
