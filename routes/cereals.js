const cereals = require("../models/cereals.js")
const router = require("express").Router()
const { validate } = require('../tokenHandler.js')
const fs = require('fs');

//? Read All
//* Retrieves All Cereals
// /api/cereals/ - get
router.get("/", async (req, res) => {
    if(Object.keys(req.query).length == 0){
        try {
            const response = await cereals.getAll()
    
            res.send(response)
        } catch (error) {
            console.error(error)
        }
//? Read Specific
//* Retrieves Filtered Cereals
// /api/cereals?x - get
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
router.post("/", validate(), async (req, res) => {
    try {
        const response = await cereals.createOne(req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

//? Updates Filtered
//* Updates all cereals that maches the filter
// /api/cereals?x - put
router.put("/", validate(), async (req, res) => {
    try {
        const response = await cereals.updateFiltered(req.query, req.body)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

//? Delete Filtered
//* Delete all cereals that maches the filter
// /api/cereals?x - delete
router.delete("/", validate(), async (req, res) => {
    try {
        const response = await cereals.deleteFiltered(req.query)

        res.send(response)
    } catch (error) {
        console.error(error)
    }
})


//? Read Specific image
//* Retrieves specific Cereals image
// /api/cereals/image?x - get
router.get("/image", async (req, res) => {
    if(Object.keys(req.query).length != 0 && req.query.name){
        try {
            const response = await cereals.getFiltered(req.query, "strict")
    
            if(response.length != 1)
                console.log(1)
                //res.send("Not unique")
            else{
                fs.readdir('./public', (err, filenames) => {
                    if(err)
                        console.log(2)
                        //res.send(err)
                    else{
                        filenames.forEach(async (filename) => {
                            fs.readFile('./public/' + filename, 'utf-8', (err, content) => {
                                if(err)
                                    console.log(3)
                                else{
                                    //console.log(filename)
                                    if(filename.split(".")[0] == req.query.name){
                                        res.send(filename)
                                    }
                                }
                            })
                        })
                    }
                })

                //res.send(response[0].name)
            }
        } catch (error) {
            console.error(error)
        }
    }else{
        res.send("Bad request")
    }
})

module.exports = router