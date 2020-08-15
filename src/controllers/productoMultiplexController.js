const express = require('express');
const DaoRelation = require('../common/DaoRelation');
const response = require('../resources/response');
const router = express.Router();

let controller = new DaoRelation();

router.get('/',(req,res) => {
    controller.getAll('Producto_Multiplex')
        .then((data) => {
            response.succes(req,res,data,200);
        })
        .catch((error) => {
            response.error(req,res,error,404);
        });
});

router.get('/',(req,res) => {

    let idProducto = req.query.idProducto;
    let idMultiplex = req.query.idMultiplex;
    controller.get('Producto_Multiplex',idProducto,idMultiplex)
        .then((data) => {
            response.succes(req,res,data,200);
        })
        .catch((error) => {
            response.error(req,res,error,404);
        });
});

router.post('/create',(req,res) => {

    let idProducto = req.body.idProducto;
    let idMultiplex = req.body.idMultiplex;
    controller.createRelation('Producto_Multiplex',[idProducto,idMultiplex])
        .then(() => {
            response.succes(req,res,'Registro creado',201);
        }).catch((error) => {
            response.error(req,res,error,401);
        });
});


router.delete('/',(req,res) => {

    let idProducto = req.query.idProducto;
    let idMultiplex = req.query.idMultiplex;
    controller.deleteRelation('Producto_Multiplex',idProducto,idMultiplex)
        .then(() => {
            response.succes(req,res,'Registro eliminado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
    
});

router.put('/',(req,res) => {

    let idProducto = req.query.idProducto;
    let idMultiplex = req.query.idMultiplex;
    controller.update('Producto_Multiplex',req.body,idProducto,idMultiplex)
        .then(() => {
            response.succes(req,res,'Registro actualizado',200);
        }).catch((error) => {
            response.error(req,res,error,500);
        });
});




module.exports = router;