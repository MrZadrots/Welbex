const pgPromise = require("pg-promise")
const promise = require('bluebird')
const dbConfig = require("../config/dbConfig.json")
const {dataTable} = require('./repos')


const initOptions = {
    promiseLib: promise,
    extend(obj,dc){
        obj.dataTable = new dataTable(obj,pgp)
    }
}


const pgp = pgPromise(initOptions)
const db = pgp(dbConfig)

module.exports = {db,pgp}