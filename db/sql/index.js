const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');

module.exports = {
    dataTable: {
        create: sql('dataTable/create.sql'),
        empty: sql('dataTable/empty.sql'),
        init: sql('dataTable/init.sql'),
        drop: sql('dataTable/drop.sql'),
        add: sql('dataTable/add.sql')
    },
};


function sql(file) {

    const fullPath = joinPath(__dirname, file); //

    const options = {
        minify: true
    };

    const qf = new QueryFile(fullPath, options);

    if (qf.error) {
        console.error(qf.error);
    }

    return qf;

}
