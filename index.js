'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

require('./routes/weather')(app);
require('./routes/cossacks')(app);
require('./routes/cities')(app);

app.listen(port, () => console.log(`Listening on port ${port}!`));
