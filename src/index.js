const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const { request, response } = require('express');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "https://cinemapa-frontend.herokuapp.com, localhost:5000");
    response.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router(app);

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () =>  {
    console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});