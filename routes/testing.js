const {test} = require("../models/test.js")
const router = require("express").Router()

//? Read All? - Static Response
//* Retrieves a "hello world"
// /api/testing/ - get
router.get("/" , (req, res) => {
    try {
        test()
        res.send('hello world')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router