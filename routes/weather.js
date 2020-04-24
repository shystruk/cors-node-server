const fetch = require('node-fetch');
const CONSTANTS = require('../constants');

module.exports = function(app) {
    app.get('/location/:latt/:long', function (req, res) {
        fetch(
            `${CONSTANTS.WEATHER_BASE_URL}/api/location/search/?lattlong=${req.params.latt},${req.params.long}`
        )
        .then(response => response.json())
        .then(json => res.send(json))
        .catch((error) => res.send(JSON.stringify({ error })));
    });

    app.get('/weather/:woeid', function (req, res) {
        fetch(
            `${CONSTANTS.WEATHER_BASE_URL}/api/location/${req.params.woeid}`
        )
        .then(response => response.json())
        .then(json => res.send(json))
        .catch((error) => res.send(JSON.stringify({ error })));
    });
};
