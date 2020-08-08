'use strict';

const config = require('./config');
const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('db is connected');
});

module.exports = {
	db,
	connect: () => {
		if (config.db.uri) {
			mongoose
				.connect(config.db.uri, {
					useNewUrlParser: true,
					useUnifiedTopology: true,
					serverSelectionTimeoutMS: 5000
				})
				.catch(err => console.log(err.reason));
		}
	}
};
