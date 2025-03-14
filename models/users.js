const connection = require('../dbconn.js')
const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports.getAll = async () => {   
    const response = await new Promise(async (res, rej) => {
        connection.query('SELECT * FROM users', (err, rows, fields) => {
            if (err) rej(err)
            res(rows)
        })
    })
    return(response)
}


module.exports.getFiltered = async (filter) => {   
    const response = await new Promise(async (res, rej) => {
        let queryCondition = ""

        for(let i = 0; i < Object.keys(filter).length; i++){
            if(i != 0)
                queryCondition += " AND"
            queryCondition += ` ${Object.keys(filter)[i]} LIKE '%${filter[Object.keys(filter)[i]]}%'`
        }

        connection.query('SELECT * FROM users WHERE' + queryCondition, (err, rows, fields) => {
            if (err) rej(err)
            res(rows)
        })
    })
    return(response)
}

module.exports.createOne = async (data) => {
    const response = await new Promise(async (res, rej) => {
        connection.query(`INSERT INTO users (name, password) 
        VALUES ("${data.name}", "${data.password}")`, 
        (err, rows, fields) => {
            if (err) rej(err)
            res("Roger Roger")
        })
    })
    return(response)
}

module.exports.updateFiltered = async (filter, data) => {
    const response = await new Promise(async (res, rej) => {
        /* If filter.length == 0 rej() */
        let queryCondition = ""

        for(let i = 0; i < Object.keys(filter).length; i++){
            if(i != 0)
                queryCondition += " AND"
            queryCondition += ` ${Object.keys(filter)[i]} = '${filter[Object.keys(filter)[i]]}'`
        }

        let queryData = ""

        for(let i = 0; i < Object.keys(data).length; i++){
            if(i != 0)
                queryData += ", "
            queryData += ` ${Object.keys(data)[i]} = '${data[Object.keys(data)[i]]}'`
        }

        connection.query('UPDATE users SET' + queryData + ' WHERE' + queryCondition, (err, rows, fields) => {
            if (err) rej(err)
            res("Roger Roger")
        })
    })
    return(response)
}

module.exports.deleteFiltered = async (filter) => {
    const response = await new Promise(async (res, rej) => {
        /* If filter.length == 0 rej() */
        let queryCondition = ""

        for(let i = 0; i < Object.keys(filter).length; i++){
            if(i != 0)
                queryCondition += " AND"
            queryCondition += ` ${Object.keys(filter)[i]} = '${filter[Object.keys(filter)[i]]}'`
        }

        connection.query('DELETE FROM users WHERE' + queryCondition, (err, rows, fields) => {
            if (err) rej(err)
            res("Roger Roger")
        })
    })
    return(response)
}

module.exports.login = async (data) => {   
    const response = await new Promise(async (res, rej) => {
        connection.query(`SELECT * FROM users WHERE name = '${data.name}' AND password = '${data.password}'`, (err, rows, fields) => {
            if (err) rej(err)

            if(rows.length == 1){
                const token = jwt.sign({ name: data.name }, process.env.JWT_SECRET, { expiresIn : '3h' })
    
                res(token)
            }else{
                res("Wrong username or password")
            }
        })
    })
    return(response)
}