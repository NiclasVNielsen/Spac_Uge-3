app = require("./server.js")


const testing = require("./routes/testing.js")
app.use("/api/testing", testing)


const cereals = require("./routes/cereals.js")
app.use("/api/cereals", cereals)