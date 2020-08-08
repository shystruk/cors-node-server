'use strict';

const CONSTANTS = require('../constants');

module.exports = function(app) {
    app.get('/cities/:language', (req, res) => {
        const language = req.params.language;

        if (language === 'en') {
            res.status(200).json(CONSTANTS.CITIES_EN);
        } else {
            res.status(204).send({ message: 'No Content' });
        }
    });
};
