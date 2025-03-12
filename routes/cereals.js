const cereals = require("../models/cereals.js")
const router = require("express").Router()
const {validate} = require('./middelware.js')

//? Read All
//* Retrieves All Cereals
// /api/cereals/ - get
router.get("/", validate, async (req, res) => {
    if(Object.keys(req.query).length == 0){
        try {
            const response = await cereals.getAll()
    
            res.send(response)
        } catch (error) {
            console.error(error)
        }
//? Read Specific
//* Retrieves Filtered Cereals
// /api/cereals/?x - get
    }else{
        try {
            const response = await cereals.getFiltered(req.query)
    
            res.send(response)
        } catch (error) {
            console.error(error)
        }
    }
})

//? Create One
//* Creates a Cereal element
// /api/cereals/ - post
router.post("/" , async (req, res) => {
    try {
        const response = await cereals.createOne(req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

//? Updates Filtered
//* Updates all cereals that maches the filter
// /api/cereals/?x - put
router.put("/" , async (req, res) => {
    try {
        const response = await cereals.updateFiltered(req.query, req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

//? Delete Filtered
//* Delete all cereals that maches the filter
// /api/cereals/?x - delete
router.delete("/" , async (req, res) => {
    try {
        const response = await cereals.deleteFiltered(req.query)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router