app = require("./server.js")


const testing = require("./routes/testing.js")
app.use("/api/testing", testing)
