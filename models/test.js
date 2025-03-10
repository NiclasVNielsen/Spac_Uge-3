const connection = require('../dbconn.js')

const test = () => {
    connection.connect()
    
    connection.query('SELECT * FROM test', (err, rows, fields) => {
      if (err) throw err
    
      console.log(rows)
    })
    
    connection.end()
}

exports.test = test