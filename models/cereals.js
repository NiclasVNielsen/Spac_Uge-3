const connection = require('../dbconn.js')

module.exports.getAll = async () => {   
    const data = await new Promise(async (res, rej) => {
        connection.query('SELECT * FROM cereals', (err, rows, fields) => {
            if (err) rej(err)
            res(rows)
        })
    })
    return(data)
}

//module.exports.getAll = getAll


module.exports.getDynamiclyFiltered = async (filter) => {   
    console.log(filter)
    const data = await new Promise(async (res, rej) => {
        let queryCondition = ""

        for(let i = 0; i < Object.keys(filter).length; i++){
            if(i != 0)
                queryCondition += " AND"
            queryCondition += ` ${Object.keys(filter)[i]} = '${filter[Object.keys(filter)[i]]}'`
        }

        connection.query('SELECT * FROM cereals WHERE' + queryCondition, (err, rows, fields) => {
            if (err) rej(err)
            res(rows)
        })
    })
    return(data)
}

//module.exports.getDynamiclyFiltered = getDynamiclyFiltered


/* const test = async (name, mfr, type, calories, protein, fat, sodium, fiber, carbo, sugars, potass, vitamins, shelf, weight, cups, rating) => {
    try {
        console.log(name + "|" + mfr + "|" + type + "|" + calories + "|" + protein + "|" + fat + "|" + sodium + "|" + fiber + "|" + carbo + "|" + sugars + "|" + potass + "|" + vitamins + "|" + shelf + "|" + weight + "|" + cups + "|" + rating)
        
        connection.query(`INSERT INTO cereals (name, mfr, type, calories, protein, fat, sodium, fiber, carbo, sugars, potass, vitamins, shelf, weight, cups, rating) VALUES ("${name}", "${mfr}", "${type}", "${calories}", "${protein}", "${fat}", "${sodium}", "${fiber}", "${carbo}", "${sugars}", "${potass}", "${vitamins}", "${shelf}", "${weight}", "${cups}", "${rating}")`, (err, rows, fields) => {
            console.log(err)
        })
            
        console.log("idk what im doing")
    } catch (error) {
        console.log(error)
    }
}

module.exports.test = test */