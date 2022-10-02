const {Router} = require('express')
const {db} = require('../db')

const router = Router()

router.get('/all',[],async (req,res)=>{
    try {
        const rezult = db.dataTable.all()
        return res.status(200).json({message:rezult})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"Что-то пошло ни так!"})
    }
})

module.exports = router