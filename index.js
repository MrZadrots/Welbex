const express = require('express')
const config = require('config')



const app = express()
const PORT = config.get('port') ||5000
app.use(express.json({extended:true}))
app.use('/api/',require('./router/main.router'))


// create table Users:
GET('/api/create', () => db.dataTable.create());

GET('/api/init', () => db.dataTable.init());

// Generic GET handler;
function GET(url, handler) {
    app.get(url, async (req, res) => {
        try {
            const data = await handler(req);
            res.json({
                success: true,
                data
            });
        } catch (error) {
            res.json({
                success: false,
                error: error.message || error
            });
        }
    });
}

async function start(){
    try {
        app.listen(PORT, ()=>console.log("Server is started on PORT ", PORT))
    } catch (error) {
        console.log("Server error! ", error)
        process.exit()
    }
}

start()