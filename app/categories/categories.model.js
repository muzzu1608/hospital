'use strict'

module.exports = (sequelize, { DataTypes, Model }) => {
    class Category extends Model { }
    Category.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Category already exists'
            },
            validate: {
                max: {
                    args: 30,
                    msg: 'Maximum length upto 30'
                },
            },
        },
    }, { sequelize, modelName: 'category' });
    return Category;
}