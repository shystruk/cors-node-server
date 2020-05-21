'use strict';
const fetch = require('node-fetch');
const CONSTANTS = require('../constants');

module.exports = function(app) {
    app.get('/location/:latt/:long', (req, res) => {
        fetch(`${CONSTANTS.WEATHER_BASE_URL}/api/location/search/?lattlong=${req.params.latt},${req.params.long}`)
            .then(response => response.json())
            .then(json => res.status(200).json(json))
            .catch(error => res.status(500).send(JSON.stringify({ error })));
    });

    app.get('/weather/:woeid', (req, res) => {
        fetch(`${CONSTANTS.WEATHER_BASE_URL}/api/location/${req.params.woeid}`)
            .then(response => response.json())
            .then(json => res.status(200).json(json))
            .catch(error => res.status(500).send(JSON.stringify({ error })));
    });
};
