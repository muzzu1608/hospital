

// Application level configurations will go here..
const configuration = {
    port: process.env.HTTP_PORT || 9000,   // PORT Number
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
            pass: 'iwayy@258'
        }
    }

};























module.exports = configuration;