const express = require('express');
const DaoRelation = require('../common/DaoRelation');
const response = require('../resources/response');
const router = express.Router();

let controller = new DaoRelation();

router.get('/',(req,res) => {
    controller.getAll('Multiplex_Cliente')
        .then((data) => {
            response.succes(req,res,data,200);
        })
        .catch((error) => {
            response.error(req,res,error,404);
        });
});

router.get('/',(req,res) => {

    let cedulaCliente = req.query.cedulaCliente;
    let idMultiplex = req.query.idMultiplex;
    controller.get('Multiplex_Cliente',cedulaCliente,idMultiplex)
        .then((data) => {
            response.succes(req,res,data,200);
        })
        .catch((error) => {
            response.error(req,res,error,404);
        });
});

router.post('/create',(req,res) => {

    let cedulaCliente = req.body.cedulaCliente;
    let idMultiplex = req.body.idMultiplex;
    controller.createRelation('Multiplex_Cliente',[cedulaCliente,idMultiplex])
        .then(() => {
            response.succes(req,res,'Registro creado',201);
        }).catch((error) => {
            response.error(req,res,error,401);
        });
});


router.delete('/',(req,res) => {

    let cedulaCliente = req.query.cedulaCliente;
    let idMultiplex = req.query.idMultiplex;
    controller.deleteRelation('Multiplex_Cliente',cedulaCliente,idMultiplex)
        .then(() => {
            response.succes(req,res,'Registro eliminado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
    
});

router.put('/',(req,res) => {

    let cedulaCliente = req.query.cedulaCliente;
    let idMultiplex = req.query.idMultiplex;
    controller.update('Multiplex_Cliente',req.body,cedulaCliente,idMultiplex)
        .then(() => {
            response.succes(req,res,'Registro actualizado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});




module.exports = router;