const http = require("http");
const express = require("express");
const morgan = require("morgan");
const config = require("../config");
const api = require("../app");
const logger = require("../config/winston");
const db = require("../config/db");
const cors = require("cors");
require("dotenv").config();
const { errorHandler } = require("../helpers/dbErrorHandler");
const { runSeed } = require("../utils/seedRunner/runSeed");
const { rmvDir } = require("../utils/fsAccessRemove/rmvDir");
const { CONSTANTS } = require("../utils/constant/constants");


let httpServer;
const app = express();
function initialize() {
  return new Promise((resolve, reject) => {
    httpServer = http.createServer(app);

    app.use(express.json());
    app.use(morgan("combined", { stream: logger.stream }));
    app.use(cors("*"));
    app.use("/public", express.static("public"));

    api(app, db);
    app.use((error, request, response, next) => {
      console.log(`SERVER ERROR: ${error.stack}`);
      response.status(400).json({
        error: errorHandler(error),
      });
    });

    db.sequelize
      .sync({ force: config.db.force, logging: console.log })
      .then(() => {
        console.log("Connection has been established successfully");

        httpServer
          .listen(config.port)
          .on("listening", () => {
            if (config.db.force && config.runSeed) {
              runSeed(db);
            }
            if (config.runSeedFiles) {
              rmvDir(CONSTANTS.REMOVE_FOLDER);
            }
            resolve();
            console.log(`Started application on http://localhost:${config.port}`);
          })
          .on("error", (err) => {
            console.error("Error while starting the server.");
            reject(err);
          });
        return;
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  });
}

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

module.exports.initialize = initialize;
module.exports.close = close;
