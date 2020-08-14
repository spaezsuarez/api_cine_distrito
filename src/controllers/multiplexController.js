const express = require('express');
const router = express.Router();
const Dao = require('../common/Dao');
const response = require('../routes/response');
const Multiplex = require('../models/Multiplex');

let multiplexManager = new Dao();

router.get('/list',(req,res) => {
    multiplexManager.getAll('Multiplex')
        .then((data) => {
            response.succes(req,res,data,200);
        })
        .catch((error) => {
            response.error(req,res,error,404);
        });
});

router.get('/',(req,res) => {

    let idMultiplex = req.query.idMultiplex;
    multiplexManager.get('Multiplex',idMultiplex)
        .then((data) => {
            response.succes(req,res,data,200);
        }).catch((error) => {
            response.error(req,res,error,404);
        });
});

router.post('/create',(req,res) => {
    
    let idMultiplex = req.body.idMultiplex;
    let nombre = req.body.nombreMultiplex;
    let ubicacion = req.body.ubicacion;

    let multiplex = new Multiplex(idMultiplex,nombre,ubicacion);
    multiplexManager.create('Multiplex',multiplex)
        .then(() => {
            response.succes(req,res,'Multiplex creado',201);
        }).catch((error) => {
            response.error(req,res,error,401);
        });

});

router.delete('/',(req,res) => {

    let idMultiplex = req.query.idMultiplex;
    multiplexManager.delete('Multiplex',idMultiplex)
        .then(() => {
            response.succes(req,res,'Multiplex eliminado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});

router.put('/',(req,res) => {

    let idMultiplex = req.query.idMultiplex;
    multiplexManager.update('Multiplex',req.body,idMultiplex)
        .then(() => {
            response.succes(req,res,'Informacion actualizada',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});


module.exports = router;