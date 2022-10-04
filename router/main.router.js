const {Router} = require('express')
const {db} = require('../db')

const router = Router()

router.get('/all',[],async (req,res)=>{
    try {
        try {
            const createDb = await db.dataTable.create()
            await db.dataTable.init()
            const rezult = await db.dataTable.all()
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            return res.status(200).json([...rezult])
        } catch (error) {
            const rezult = await db.dataTable.all()
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            return res.status(200).json([...rezult])
        }
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"Что-то пошло ни так!"})
    }
})

module.exports = router