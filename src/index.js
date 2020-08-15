const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const bodyParser = require('body-parser');
const router = require('./resources/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router(app);

app.listen(port);