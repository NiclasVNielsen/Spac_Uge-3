const express = require("express")
const app = express()

/* app.get('/', function (req, res) {
    res.send('hello world')
}) */

import("./router.js")


app.listen(3000)

module.exports = app