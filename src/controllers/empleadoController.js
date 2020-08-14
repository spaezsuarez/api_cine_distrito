const express = require('express');
const router = express.Router();
const response = require('../routes/response');
const Dao = require('../common/Dao');
const Empleado = require('../models/Empleado');

let empleadoManager = new Dao();

router.get('/list', (req,res) => {

    empleadoManager.getAll('Empleado')
        .then( (data) => {
            response.succes(req,res,data,200);
        }).catch( (error) => {
            response.error(req,res,error,404);
        });
});

router.get('/',(req,res) => {

    let idEmpleado = req.query.idEmpleado;
    empleadoManager.get('Empleado',idEmpleado)
        .then((data) => {
            response.succes(req,res,data,200);
        }).catch((error) => {
            response.error(req,res,error,404);
        });
});

router.post('/create',(req,res) => {

    let idEmpleado = req.body.idEmpleado;
    let cedula = req.body.cedula;
    let nombreEmpleado = req.body.nombreEmpleado;
    let fechaInicio = req.body.fechaInicio;
    let salario = req.body.salario;
    let idMultiplex = req.body.idMultiplex;

    let empleado = new Empleado(idEmpleado,cedula,nombreEmpleado,fechaInicio,salario,idMultiplex);

    empleadoManager.create('Empleado',empleado)
        .then(() => {
            response.succes(req,res,`Empleado ${idEmpleado} creado exitosamente`,201);
        }).catch((error) => {
            response.error(req,res,error,401);
        });
});

router.delete('/',(req,res) => {

    let idEmpleado = req.query.idEmpleado;
    empleadoManager.delete('Empleado',idEmpleado)
        .then(() => {
            response.succes(req,res,`Empleado ${idEmpleado} eliminado exitosamente`,200);
        }).catch((error) => {
            response.error(req,res,error.message,500);
        });
});

router.put('/',(req,res) => {
    
    let idEmpleado = req.query.idEmpleado;
    empleadoManager.update('Empleado',req.body,idEmpleado)
        .then(() => {
            response.succes(req,res,`Informacion del empleado ${idEmpleado} actualizada `,200);
        })
        .catch((error) => {
            response.error(req,res,error,500);
        });
});




module.exports = router;