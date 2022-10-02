const {QueryFile} = require('pg-promise')
const {join:joinPath} = require('path')

module.exports = {
    dataTable:{
        create: sql('data/create.sql'),
        init: sql('data/init.sql'),
        add: sql('data/add.sql'),
        drop: sql('data/drop.sql')
    }
}

function sql(file){
    const fullPath = joinPath(__dirname, file)
    const options = {
        manify: true
    }
    const qf = new QueryFile(fullPath,options)
    if(qf.error){
        console.log(qf.error)
    }

    return qf
}