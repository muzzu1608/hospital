const Sequelize = require("sequelize");
const config = require("../config");

const connection = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,
        underscored: true
    });

module.exports = { connection };

