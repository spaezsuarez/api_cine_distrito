const clienteController = require('../controllers/clienteController');
const empleadoController = require('../controllers/empleadoController');
const multiplexController = require('../controllers/multiplexController');
const peliculaController = require('../controllers/peliculaController');
const productoController = require('../controllers/productoController');
const salaController = require('../controllers/salaController');
const sillaController = require('../controllers/sillaController');
const productoMultiplexController = require('../controllers/productoMultiplexController');
const multiplexClienteController = require('../controllers/multiplexClienteController');
const peliculaSalaController = require('../controllers/peliculaSalaController');

const routes = (app) => {
    app.use('/cliente',clienteController);
    app.use('/empleado',empleadoController);
    app.use('/multiplex',multiplexController);
    app.use('/pelicula',peliculaController);
    app.use('/producto',productoController);
    app.use('/sala',salaController);
    app.use('/silla',sillaController);
    app.use('/producto_multiplex',productoMultiplexController);
    app.use('/multiplex_cliente',multiplexClienteController);
    app.use('/pelicula_sala',peliculaSalaController);
}

module.exports  = routes;