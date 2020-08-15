const express = require('express');
const router = express.Router();
const Dao = require('../common/Dao');
const response = require('../resources/response');
const Sala = require('../models/Sala');

let salaManager = new Dao();

router.get('/list', (req, res) => {
    
    salaManager.getAll('Sala')
        .then((data) => {
            response.succes(req, res, data, 200);
        }).catch((error) => {
            response.error(req, res, error, 404);
        });
});

router.get('/', (req,res) => {

    let idSala = req.query.idSala;
    salaManager.get('Sala',idSala)
        .then((data) => {
            response.succes(req, res, data, 200);
        }).catch((error) => {
            response.error(req, res, error, 404);
        });
});

router.post('/create',(req,res) => {

    let idSala = req.body.idSala;
    let idMultiplex = req.body.idMultiplex;

    let sala = new Sala(idSala,idMultiplex);
    salaManager.create('Sala',sala)
        .then(() => {
            response.succes(req,res,'Sala creada exitosamente',201);
        }).catch((error) => {
            response.error(req,res,error,500);
        });

});

router.delete('/',(req,res) => {

    let idSala = req.query.idSala;
    salaManager.delete('Sala',idSala)
        .then(() => {
            response.succes(req,res,'Sala eliminada',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });

});

router.put('/',(req,res) => {

    let idSala = req.query.idSala;
    salaManager.update('Sala',req.body,idSala)
        .then(() => {
            response.succes(req,res,'Datos de la sala actualizados',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});


module.exports = router;