const cereals = require("../models/cereals.js")
const router = require("express").Router()

//? Read All
//* Retrieves All Cereals
// /api/cereals/ - get
router.get("/" , async (req, res) => {
    if(Object.keys(req.query).length == 0){
        try {
            const response = await cereals.getAll()
    
            res.send(response)
        } catch (error) {
            console.error(error)
        }
//? Read Specific
//* Retrieves All Cereals
// /api/cereals/?x - get
    }else{
        try {
            const response = await cereals.getDynamiclyFiltered(req.query)
    
            res.send(response)
        } catch (error) {
            console.error(error)
        }
    }
})

router.post("/" , async (req, res) => {
    try {
        const response = await cereals.createOne(req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

router.put("/" , async (req, res) => {
    try {
        const response = await cereals.updateOne(req.query, req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

router.delete("/" , async (req, res) => {
    try {
        const response = await cereals.deleteOne(req.query)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router