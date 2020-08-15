const express = require('express');
const DaoRelation = require('../common/DaoRelation');
const response = require('../resources/response');
const router = express.Router();

let controller = new DaoRelation();

router.get('/',(req,res) => {
    controller.getAll('Pelicula_Sala')
        .then((data) => {
            response.succes(req,res,data,200);
        })
        .catch((error) => {
            response.error(req,res,error,404);
        });
});

router.get('/',(req,res) => {

    let idPelicula = req.query.idPelicula;
    let idSala = req.query.idSala;
    controller.get('Pelicula_Sala',idPelicula,idSala)
        .then((data) => {
            response.succes(req,res,data,200);
        })
        .catch((error) => {
            response.error(req,res,error,404);
        });
});

router.post('/create',(req,res) => {

    let idPelicula = req.body.idPelicula;
    let idSala = req.body.idSala;
    let fechaInicio = req.body.fechaInicio;
    let fechaFin = req.body.fechaFin;

    controller.createRelation('Pelicula_Sala',[idPelicula,idSala,fechaInicio,fechaFin])
        .then(() => {
            response.succes(req,res,'Registro creado',201);
        }).catch((error) => {
            response.error(req,res,error,401);
        });
});


router.delete('/',(req,res) => {

    let idPelicula = req.query.idPelicula;
    let idSala = req.query.idSala;
    controller.deleteRelation('Pelicula_Sala',idPelicula,idSala)
        .then(() => {
            response.succes(req,res,'Registro eliminado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
    
});

router.put('/',(req,res) => {

    let idPelicula = req.query.idPelicula;
    let idSala = req.query.idSala;
    controller.update('Pelicula_Sala',req.body,idPelicula,idSala)
        .then(() => {
            response.succes(req,res,'Registro actualizado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});



module.exports = router;