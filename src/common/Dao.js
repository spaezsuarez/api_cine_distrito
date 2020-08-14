const db = require('./database');

class Dao{

    constructor(){
        this.db = db;
    }

    getAll(table){
        return new Promise((resolve,reject) => {
            this.db.query(`SELECT * FROM ${table};`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    get(table,id){
        return new Promise((resolve,reject) =>{
            this.db.query(`SELECT * FROM ${table} WHERE ${this.getIdDB(table)} = ${id};`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    create(table,object){
        return new Promise((resolve,reject) => {
            this.db.query(`INSERT INTO ${table} ${this.getValueText(object.toArray())}`)
                .then((data) => {
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    delete(table,id){
        return new Promise((resolve,reject) =>{
            this.db.query(`DELETE FROM ${table} WHERE ${this.getIdDB(table)} = ${id};`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    update(table,body,id){
        return new Promise((resolve,reject) => {
            this.db.query(`UPDATE ${table} SET ${this.getUpdateText(body)} WHERE ${this.getIdDB(table)} = ${id};`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

    //Metodos para determinar valores de consultas a la base de datos

    getIdDB(table){
        switch(table){
            case 'Empleado':
                return 'idEmpleado';

            case 'Cliente':
                return 'cedula';

            case 'Multiplex':
                return'idMultiplex';

            case 'Pelicula':
                return 'idPelicula';

            case 'Sala':
                return 'idSala';

            case 'Silla':
                return 'idSilla';

            case 'Producto':
                return 'idProducto';
        }
    }

    getValueText(list){
        let values = 'VALUES(';
        for(let i = 0; i < list.length;i++){
            if(i === (list.length-1)){
                values += `${list[i]});`
            }else{
                values += `${list[i]},`
            }
        }
    
        return values;
    }

    getUpdateText(body){
        let update = '';
        for(let clave in body){
            if(body.hasOwnProperty(clave)){
                update += `${clave} = ${body[clave]},`;
            }
        }
        return update.substring(0,update.length-1);

    }
}

module.exports = Dao;