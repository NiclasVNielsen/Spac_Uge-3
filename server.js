const express = require("express")
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import("./router.js")

import("./dbconn.js")


app.listen(3000)

module.exports = app