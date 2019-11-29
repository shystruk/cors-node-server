const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

require('./routes')(app);

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}!`));
