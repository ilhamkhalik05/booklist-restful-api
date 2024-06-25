const db = require('../db/connection')
const { responseWithData, serverErrorResponse } = require('../utils/response')

const getBooks = (req, res) => {
   const sql = "SELECT * FROM books"
   db.query(sql, (err, result) => {
      if (err) {
         serverErrorResponse(res)
         return
      }
      
      responseWithData(res, 200, "Success", "Get Books", result)
   })
}

module.exports = getBooks