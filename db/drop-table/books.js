const db = require('../connection')

const dropBooks = () => {
   const sql = 'DROP TABLE IF EXISTS books'
   db.query(sql, (err, result) => {
      if (err) console.log(err)
      console.log('Drop books table...')
      setTimeout(() => {
         console.log('Books table dropped!')
      }, 2000)
   })
}

dropBooks()
module.exports = dropBooks