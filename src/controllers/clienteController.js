const express = require('express');
const router = express.Router();
const response = require('../resources/response');
const Dao = require('../common/Dao');
const Cliente = require('../models/Cliente');

let clienteManager = new Dao();

router.get('/list', (req, res) => {

    clienteManager.getAll('Cliente')
        .then((data) => {
            response.succes(req, res, data, 200);
        }).catch((error) => {
            response.error(req, res, error, 404);
        });
});

router.post('/create', (req, res) => {

    let cedula = req.body.cedula;
    let telefono = req.body.telefono;
    let nombre = req.body.nombre;
    let puntos = req.body.puntos;

    let cliente = new Cliente(cedula, telefono, nombre, puntos);

    clienteManager.create('Cliente', cliente)
        .then(() => {
            response.succes(req, res, `Cliente ${cedula} creado exitosamente`, 201);
        })
        .catch((error) => {
            response.error(req, res, error, 401);
        });
        
});

router.delete('/', (req, res) => {

    let cedula = req.query.cedula;
    clienteManager.delete('Cliente', cedula)
        .then(() => {
            response.succes(req, res, `Cliente ${cedula} eliminado exitosamente`, 200);
        })
        .catch((error) => {
            response.error(req, res, error, 402);
        });
});

router.get('/', (req, res) => {

    let cedula = req.query.cedula;
    clienteManager.get('Cliente', cedula)
        .then((data) => {
            response.succes(req, res, data, 200);
        }).catch((error) => {
            response.error(req, res, error, 404);
        });
});

router.put('/', (req, res) => {

    let cedula = req.query.cedula;
    clienteManager.update('Cliente',req.body,cedula)
        .then(() => {
            response.succes(req,res,`Informacion del cliente ${cedula} actualizada`,200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});

module.exports = router;