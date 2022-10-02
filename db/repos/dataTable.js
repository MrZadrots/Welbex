const {dataTable: sql} = require('../sql')

const cs = {}

class dataTableRepository {
    constructor(db, pgp){
        this.db = db
        this.pgp = pgp
        createColumnsets(pgp)
    }

    async create(){
        return this.db.none(sql.create)
    }
    async drop(){
        return this.db.none(sql.drop)
    }
    async add(values){
        return this.db.one(sql.add,{
            date: values.date,
            name: values.name,
            count: values.count,
            distance: values.distance
        })
    }
    async find(values){
        return this.db.oneOrNone(sql.find, {
            date: values.date,
            name: values.name,
            count: values.count,
            distance: values.distance
        });
    }
    async all() {
        return this.db.any('SELECT * FROM products');
    }


    /*async total() {
        return this.db.one('SELECT count(*) FROM products', [], a => +a.count);
    }*/
}

function createColumnsets(pgp) {
    // create all ColumnSet objects only once:
    if (!cs.insert) {
        // Type TableName is useful when schema isn't default "public" ,
        // otherwise you can just pass in a string for the table name.
        const table = new pgp.helpers.TableName({table: 'users', schema: 'public'});

        cs.insert = new pgp.helpers.ColumnSet(['name'], {table});
        cs.update = cs.insert.extend(['?id']);
    }
    return cs;
}
module.exports = ProductsRepository;