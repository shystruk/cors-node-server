const CONSTANTS = require('../constants');

module.exports = function(app) {
    app.get('/cossacks/:language', function (req, res) {
        const language = req.params.language;

        if (language === 'en') {
            res.json(200, CONSTANTS.COSSACKS_EN);
        } else {
            res.send(204, { message: 'No Content'});
        }
    });
};
