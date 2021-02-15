const { categories } = require("./seed");

module.exports = async (db) => {
    await db.categories.bulkCreate(categories);
};