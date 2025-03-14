app = require("./server.js")
var { expressjwt } = require("express-jwt");
const jwt = require("jsonwebtoken")
require('dotenv').config()


const cereals = require("./routes/cereals.js")
app.use("/api/cereals", cereals)

const users = require("./routes/users.js")
app.use("/api/users", users)