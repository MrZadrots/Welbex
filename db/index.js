const promise = require('bluebird'); 
const pgPromise = require('pg-promise'); 
const dbConfig = require('../config/dbConfig.json'); 
const {Diagnostics} = require('./diagnostics'); 
const {DataTable} = require('./repos');


const initOptions = {
    promiseLib: promise,

    extend(obj, dc) {
        obj.dataTable = new DataTable(obj, pgp);
    }
};

// Initializing the library:
const pgp = pgPromise(initOptions);

// Creating the database instance:
const db = pgp(dbConfig);

// Initializing optional diagnostics:
Diagnostics.init(initOptions);

module.exports = {db, pgp};
