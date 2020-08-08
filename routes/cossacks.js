'use strict';

const CONSTANTS = require('../constants');

module.exports = function(app) {
    app.get('/cossacks/:language', (req, res) => {
        const language = req.params.language;

        if (language === 'en') {
            res.status(200).json(CONSTANTS.COSSACKS_EN);
        } else {
            res.status(204).send({ message: 'No Content' });
        }
    });
};
