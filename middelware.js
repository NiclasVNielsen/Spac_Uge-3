var { expressjwt } = require("express-jwt");
require('dotenv').config()

/* module.exports.validate = (req, res, next) => {
    const key = req.body["key"]
    delete req.body["key"]

    if(true) /* Valid Key *
        next()
    else
        res.send("You are not logged in!")
}
 */

module.exports.validate = () => {
    return expressjwt({ secret:  process.env.JWT_SECRET, algorithms: ["HS256"] })
}


