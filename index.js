'use strict';

const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();
const db = require('./db');

app.use(cors());
db.connect();

require('./routes/weather')(app);
require('./routes/cossacks')(app);
require('./routes/cities')(app);

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));
