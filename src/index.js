const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router(app);

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () =>  {
    console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});