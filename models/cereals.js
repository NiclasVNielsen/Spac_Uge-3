const connection = require('../dbconn.js')

module.exports.getAll = async () => {   
    const response = await new Promise(async (res, rej) => {
        connection.query('SELECT * FROM cereals', (err, rows, fields) => {
            if (err) rej(err)
            res(rows)
        })
    })
    return(response)
}


module.exports.getDynamiclyFiltered = async (filter) => {   
    const response = await new Promise(async (res, rej) => {
        let queryCondition = ""

        for(let i = 0; i < Object.keys(filter).length; i++){
            if(i != 0)
                queryCondition += " AND"
            queryCondition += ` ${Object.keys(filter)[i]} LIKE '%${filter[Object.keys(filter)[i]]}%'`
        }

        connection.query('SELECT * FROM cereals WHERE' + queryCondition, (err, rows, fields) => {
            if (err) rej(err)
            res(rows)
        })
    })
    return(response)
}

module.exports.createOne = async (data) => {
    const response = await new Promise(async (res, rej) => {
        connection.query(`INSERT INTO cereals (name, mfr, type, calories, protein, fat, sodium, fiber, carbo, sugars, potass, vitamins, shelf, weight, cups, rating) 
        VALUES ("${data.name}", "${data.mfr}", "${data.type}", "${data.calories}", "${data.protein}", "${data.fat}", "${data.sodium}", "${data.fiber}", "${data.carbo}", "${data.sugars}", "${data.potass}", "${data.vitamins}", "${data.shelf}", "${data.weight}", "${data.cups}", "${data.rating}")`, 
        (err, rows, fields) => {
            if (err) rej(err)
            res("Roger Roger")
        })
    })
    return(response)
}

module.exports.updateOne = async (filter, data) => {
    const response = await new Promise(async (res, rej) => {
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

        connection.query('UPDATE cereals SET' + queryData + ' WHERE' + queryCondition, (err, rows, fields) => {
            if (err) rej(err)
            res("Roger Roger")
        })
    })
    return(response)
}

module.exports.deleteOne = async (filter) => {
    const response = await new Promise(async (res, rej) => {
        let queryCondition = ""

        for(let i = 0; i < Object.keys(filter).length; i++){
            if(i != 0)
                queryCondition += " AND"
            queryCondition += ` ${Object.keys(filter)[i]} = '${filter[Object.keys(filter)[i]]}'`
        }

        connection.query('DELETE FROM cereals WHERE' + queryCondition, (err, rows, fields) => {
            if (err) rej(err)
            res("Roger Roger")
        })
    })
    return(response)
}