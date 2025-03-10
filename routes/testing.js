const {test, testx} = require("../models/test.js")
const router = require("express").Router()

//? Read All? - Static Response
//* Retrieves a "hello world"
// /api/testing/ - get
router.post("/" , async (req, res) => {
    try {
        if(req.body.data){
            const da = req.body.data
            console.log(da)
            await test(da[0],da[1],da[2],da[3],da[4],da[5],da[6],da[7],da[8],da[9],da[10],da[11],da[12],da[13],da[14],da[15])
        }else{
            await test(1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6)
        }
        res.send('hello world')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router