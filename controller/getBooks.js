const db = require('../db/connection')
const { responseWithData } = require('../utils/response')

const getBooks = (req, res) => {
   const sql = "SELECT * FROM books"
   db.query(sql, (err, result) => {
      if (err) console.log(err)
      responseWithData(res, 200, "Success", "Get Books", result)
   })
}

module.exports = getBooks