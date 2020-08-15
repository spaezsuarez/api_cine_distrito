const express = require('express');
const router = express.Router();
const Dao = require('../common/Dao');
const response = require('../resources/response');
const Producto = require('../models/Producto');

let productoManager = new Dao();

router.get('/list', (req, res) => {
    
    productoManager.getAll('Producto')
        .then((data) => {
            response.succes(req, res, data, 200);
        }).catch((error) => {
            response.error(req, res, error, 404);
        });
});

router.get('/', (req, res) => {

    let idProducto = req.query.producto;
    productoManager.get('Producto', idProducto)
        .then((data) => {
            response.succes(req, res, data, 200);
        })
        .catch((error) => {
            response.error(req, res, error, 404);
        });

});

router.post('/create', (req, res) => {

    let idProducto = req.body.idProducto;
    let nombreProducto = req.body.nombreProducto;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;

    let producto = new Producto(idProducto,cantidad,nombreProducto,precio);

    productoManager.create('Producto', producto)
        .then(() => {
            response.succes(req, res, `Producto ${idProducto} creado`, 200);
        }).catch((error) => {
            response.error(req, res, error, 500);
        });
});

router.delete('/', (req, res) => {

    let idProducto = req.query.idProducto;
    productoManager.delete('Producto', idProducto)
        .then(() => {
            response.succes(req, res, `Producto ${idProducto} eliminado`, 200)
        }).catch((error) => {
            response.error(req, res, error, 500);
        });
})

router.put('/', (req, res) => {

    let idProducto = req.query.idProducto;
    productoManager.update('Producto', req.body, idProducto)
        .then(() => {
            response.succes(req, res, `Producto ${idProducto} actualizado`, 200)
        }).catch((error) => {
            response.error(req, res, error, 500);
        });

});

module.exports = router;