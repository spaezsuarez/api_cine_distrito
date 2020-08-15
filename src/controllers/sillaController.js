const express = require('express');
const router = express.Router();
const Dao = require('../common/Dao');
const response = require('../resources/response');
const Silla = require('../models/Silla');

let sillaManager = new Dao();

router.get('/list',(req,res) => {

    sillaManager.getAll('Silla')
        .then((data) => {
            response.succes(req,res,data,200);
        }).catch((error) => {
            response.error(req,res,error,404);
        });
});

router.get('/',(req,res) => {

    let idSilla = req.query.idSilla;
    sillaManager.get('Silla',idSilla)
        .then((data) => {
            response.succes(req,res,data,200);
        }).catch((error) => {
            response.error(req,res,error,404);
        });
});

router.post('/create',(req,res) => {

    let idSilla = req.body.idSilla;
    let tipo = req.body.tipo;
    let precio = req.body.precio;
    let idSala = req.body.idSala;

    let silla = new Silla(idSilla,tipo,precio,idSala);

    sillaManager.create('Silla',silla)
        .then(() => {
            response.success(req,res,'Elemento creado exitosamente',201);
        }).catch((error) => {
            response.error(req,res,error,500);
        });

});


router.put('/',(req,res) => {

    let idSilla = req.body.idSilla;
    sillaManager.update('Silla',req.body,idSilla)
        .then(() => {
            response.succes(req,res,'Elemento actualizado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});


router.delete('/',(req,res) => {

    let idSilla = req.body.idSilla;
    sillaManager.delete('Silla',idSilla)
        .then(() => {
            response.succes(req,res,'Elemento eliminado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});

module.exports = router;