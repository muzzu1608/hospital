'use strict';

module.exports = (app, db) => {

    app.get('/', async (request, response, next) => {
        try {
            response.status(200).json({
                'applicationName': 'HOSPITAL_SERVER',
                'status': 'Up',
                'date': new Date()
            });
        } catch (error) {
            next(error);
        }
    });

    app.get('/ping', async (request, response, next) => {
        try {
            response.status(200).send('<h2>Pong</h2>');
        } catch (error) {
            next(error);
        }
    });

};