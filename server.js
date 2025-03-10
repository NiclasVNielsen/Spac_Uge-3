const express = require("express")
const app = express()


import("./router.js")

import("./dbconn.js")


app.listen(3000)

module.exports = app