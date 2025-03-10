const connection = require('../dbconn.js')

const testx = () => {    
    connection.query('SELECT * FROM test', (err, rows, fields) => {
      if (err) throw err
    
      console.log(rows)
    })
}

module.exports.testx = testx


const test = async (name, mfr, type, calories, protein, fat, sodium, fiber, carbo, sugars, potass, vitamins, shelf, weight, cups, rating) => {
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

module.exports.test = test