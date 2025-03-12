const users = require("../models/users.js")
const router = require("express").Router()
const {validate} = require('./middelware.js')

//? Read All
//* Retrieves All Users
// /api/users/ - get
router.get("/", validate, async (req, res) => {
    if(Object.keys(req.query).length == 0){
        try {
            const response = await users.getAll()
    
            res.send(response)
        } catch (error) {
            console.error(error)
        }
//? Read Specific
//* Retrieves Filtered Users
// /api/users/?x - get
    }else{
        try {
            const response = await users.getFiltered(req.query)
    
            res.send(response)
        } catch (error) {
            console.error(error)
        }
    }
})

//? Create One
//* Creates a User element
// /api/users/ - post
router.post("/" , async (req, res) => {
    try {
        const response = await users.createOne(req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

//? Updates Filtered
//* Updates all Users that maches the filter
// /api/users/?x - put
router.put("/" , async (req, res) => {
    try {
        const response = await users.updateFiltered(req.query, req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

//? Delete Filtered
//* Delete all Users that maches the filter
// /api/users/?x - delete
router.delete("/" , async (req, res) => {
    try {
        const response = await users.deleteFiltered(req.query)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router