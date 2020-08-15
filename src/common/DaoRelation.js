const Dao = require('./Dao');
const resource = require('../resources/functions');

module.exports = class DaoRelation extends Dao{

    createRelation(table,params){
        return new Promise((resolve,reject) => {
            this.db.query(`INSERT INTO ${table} ${resource.getValueText(params)}`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    get(table,firstKey,secondKey){
        return new Promise((resolve,reject) =>{
            this.db.query(`SELECT * FROM ${table} WHERE ${resource.getKeys(table)[0]} = ${firstKey} AND ${resource.getKeys(table)[1]} = ${secondKey};`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    deleteRelation(table,firstKey,secondKey){
        return new Promise((resolve,reject) =>{
            this.db.query(`DELETE FROM ${table} WHERE ${resource.getKeys(table)[0]} = ${firstKey} AND ${resource.getKeys(table)[1]} = ${secondKey};`)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    update(table,body,firstKey,secondKey){
        return new Promise((resolve,reject) => {
            this.db.query(`UPDATE ${table} SET ${resource.getUpdateText(body)} WHERE ${resource.getKeys(table)[0]} = ${firstKey} AND ${resource.getKeys(table)[1]} = ${secondKey};`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

}