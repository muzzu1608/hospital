
if (process.env.NODE_ENV == 'development') {
    module.exports = require("./development");
} else if (process.env.NODE_ENV == 'staging') {
    module.exports = require("./staging");
} else if (process.env.NODE_ENV == 'testing') {
    module.exports = require("./testing");
} else if (process.env.NODE_ENV == 'production') {
    module.exports = require("./production");
}

