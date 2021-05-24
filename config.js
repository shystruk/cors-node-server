'use strict';

require('dotenv').config();

module.exports = {
	port: process.env.PORT || 8000,
	db: {
		uri: ''
	}
};
