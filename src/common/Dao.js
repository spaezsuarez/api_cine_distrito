const db = require('./database');
const resource = require('../resources/functions');

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
            this.db.query(`SELECT * FROM ${table} WHERE ${resource.getIdDB(table)} = ${id};`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    create(table,object){
        return new Promise((resolve,reject) => {
            this.db.query(`INSERT INTO ${table} ${resource.getValueText(object.toArray())}`)
                .then((data) => {
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    delete(table,id){
        return new Promise((resolve,reject) =>{
            this.db.query(`DELETE FROM ${table} WHERE ${resource.getIdDB(table)} = ${id};`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    update(table,body,id){
        return new Promise((resolve,reject) => {
            this.db.query(`UPDATE ${table} SET ${resource.getUpdateText(body)} WHERE ${resource.getIdDB(table)} = ${id};`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

    
}

module.exports = Dao;