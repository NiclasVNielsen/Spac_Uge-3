module.exports.validate = (req, res, next) => {
    const key = req.body["key"]
    delete req.body["key"]

    if(true) /* Valid Key */
        next()
    else
        res.send("You are not logged in!")
}