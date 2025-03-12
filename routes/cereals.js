const cereals = require("../models/cereals.js")
const router = require("express").Router()

//? Read All
//* Retrieves All Cereals
// /api/cereals/ - get
router.get("/" , async (req, res) => {
    if(Object.keys(req.query).length == 0){
        try {
            const data = await cereals.getAll()
    
            res.send(data)
        } catch (error) {
            console.error(error)
        }
//? Read Specific
//* Retrieves All Cereals
// /api/cereals/?x - get
    }else{
        try {
            const data = await cereals.getDynamiclyFiltered(req.query)
    
            res.send(data)
        } catch (error) {
            console.error(error)
        }
    }
})

module.exports = router