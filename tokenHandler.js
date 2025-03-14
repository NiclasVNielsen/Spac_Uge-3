var { expressjwt } = require("express-jwt");
require('dotenv').config()

module.exports.validate = () => {
    return expressjwt({ secret:  process.env.JWT_SECRET, algorithms: ["HS256"] })
}


