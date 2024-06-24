const db = require('../connection')

const dropUsers = () => {
   const sql = 'DROP TABLE IF EXISTS users'
   db.query(sql, (err, result) => {
      if (err) console.log(err)
      console.log('Drop users table...')
      setTimeout(() => {
         console.log('Users table dropped!')
      }, 2000)
   })
}

dropUsers()
module.exports = dropUsers