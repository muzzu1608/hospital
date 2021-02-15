require("dotenv").config();

// Application level configurations will go here..
const configuration = {
  port: process.env.HTTP_PORT || 5000,   // PORT Number
  logger: {
    file: {
      level: 'info',
      filename: `logs/app.log`,
      handleExceptions: true,
      json: true,
      maxSize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    }
  },
  mailer: {
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  },
  db: {
    host: 'localhost',
    port: 3351,
    database: 'restro',    // Mysql - database-name
    user: 'root',
    password: 'password',
    dialect: 'mysql',
    force: false
  },
  runSeed: false,              // Run-seed-data && db.force set to true
  runSeedFiles: false,        // Run-seed-Files
};

module.exports = configuration;