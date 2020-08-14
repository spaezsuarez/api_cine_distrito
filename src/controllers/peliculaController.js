const express = require('express');
const router = express.Router();
const response = require('../routes/response');
const Dao = require('../common/Dao');
const Pelicula = require('../models/Pelicula');

let peliculaManager = new Dao();

router.get('/list', (req,res) => {

    peliculaManager.getAll('Pelicula')
        .then((data) => {
            response.succes(req,res,data,200);
        }).catch((error) => {
            response.error(req,res,error,404);
        });
})

router.get('/',(req,res) => {

    let idPelicula = req.query.idPelicula;
    peliculaManager.get('Pelicula',idPelicula)
        .then((data) => {
            response.succes(req,res,data,200);
        }).catch((error) => {
            response.error(req,res,error,404);
        });  

});

router.post('/create',(req,res) => {

    let idPelicula = req.body.idPelicula;
    let nombre = req.body.nombre;
    let duracion = req.body.duracion;

    let pelicula = new Pelicula(idPelicula,nombre,duracion);
    peliculaManager.create('Pelicula',pelicula)
        .then(() => {
            response.succes(req,res,`Pelicula ${nombre} agregada`,200);
        }).catch((error) => {
            response.error(req,res,error,401);
        });
});

router.delete('/',(req,res) => {

    let idPelicula = req.query.idPelicula;
    peliculaManager.delete('Pelicula',idPelicula)
        .then(() => {
            response.succes(req,res,`Pelicula ${idPelicula} creada exitosamente`,200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});

router.put('/',(req,res) => {

    let idPelicula = req.query.idPelicula;
    peliculaManager.update('Pelicula',req.body,idPelicula)
        .then(() => {
            response.succes(req,res,`Datos de la pelicula ${idPelicula} actualizados`);
        }).catch((error) => {
            response.error(req,res,error,401);
        });
});

module.exports = router;