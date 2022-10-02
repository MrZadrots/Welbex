const {dataTable: sql} = require('../sql');

const cs = {};

class DataTableRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    // Creates the table;
    async create() {
        return this.db.none(sql.create);
    }

    // Initializes the table with some user records, and return their id-s;
    async init() {
        return this.db.map(sql.init, [], row => row.id);
    }

    // Drops the table;
    async drop() {
        return this.db.none(sql.drop);
    }

    // Removes all records from the table;
    async empty() {
        return this.db.none(sql.empty);
    }

    // Adds a new user, and returns the new object;
    async add(name) {
        return this.db.one(sql.add, name);
    }

    // Tries to delete a user by id, and returns the number of records deleted;
    async remove(id) {
        return this.db.result('DELETE FROM dataTable WHERE id = $1', +id, r => r.rowCount);
    }

    // Tries to find a user from id;
    async findById(id) {
        return this.db.oneOrNone('SELECT * FROM dataTable WHERE id = $1', +id);
    }

    // Tries to find a user from name;
    async findByName(name) {
        return this.db.oneOrNone('SELECT * FROM dataTable WHERE name = $1', name);
    }

    // Returns all user records;
    async all() {
        return this.db.any('SELECT * FROM dataTable');
    }

    // Returns the total number of users;
    async total() {
        return this.db.one('SELECT count(*) FROM dataTable', [], a => +a.count);
    }
}



module.exports = DataTableRepository;
