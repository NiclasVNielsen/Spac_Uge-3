app = require("./server.js")


const cereals = require("./routes/cereals.js")
app.use("/api/cereals", cereals)

const users = require("./routes/users.js")
app.use("/api/users", users)