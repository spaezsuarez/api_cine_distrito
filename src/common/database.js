const mysql = require('mysql');
const keys = require('../private/keys');
const { promisify } = require('util');

const pool = mysql.createPool(keys);

pool.getConnection((error,connection) => {

    /*if(error.code === 'PROTOCOL_CONNECTION_LOST'){
        console.error('Conexion con la base de datos fue cerrada');

    }else if(error.code === 'ERR_CON_COUNT_ERROR') {
        console.error('La base de datos tiene demasiadas conexiones');

    }else if(error.code === 'ECONNREFUSED'){
        console.error('Conexion a la base de datos rechazada');
    }*/
    if(connection){
        connection.release();
        console.log('Conexion a la base de datos exitosa');
        return
    }else{
        console.table(error);
        throw new Error(error);
    }

});

pool.query = promisify(pool.query);

module.exports = pool;