const clienteController = require('../controllers/clienteController');
const empleadoController = require('../controllers/empleadoController');
const multiplexController = require('../controllers/multiplexController');
const peliculaController = require('../controllers/peliculaController');
const productoController = require('../controllers/productoController');
const salaController = require('../controllers/salaController');
const sillaController = require('../controllers/sillaController');

const routes = (app) => {
    app.use('/cliente',clienteController);
    app.use('/empleado',empleadoController);
    app.use('/multiplex',multiplexController);
    app.use('/pelicula',peliculaController);
    app.use('/producto',productoController);
    app.use('/sala',salaController);
    app.use('/silla',sillaController);
}

module.exports  = routes;