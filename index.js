const express = require('express')
const config = require('config')
const {db} = require('./db')
const cors = require('cors')

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express()
const PORT = config.get('port') ||5000
app.use(express.json({extended:true}))
app.use('/api/',require('./router/main.router'))
app.use(cors(corsOptions))

async function start(){
    try {
        app.listen(PORT, ()=>console.log("Server is started on PORT ", PORT))
    } catch (error) {
        console.log("Server error! ", error)
        process.exit()
    }
}

start()