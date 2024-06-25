const db = require('../db/connection')
const { responseWithData, serverErrorResponse, response } = require('../utils/response')

const getReadedBook = (req, res) => {
   const sql = `SELECT * FROM books WHERE is_read > 0`
   db.query(sql, (err, result) => {
      if (err) {
         serverErrorResponse(res)
         return
      }

      if (result === 0) response(res, 404, 'Failed', 'You haven\'t read a single book yet!')
      responseWithData(res, 200, 'Success', 'Get Readed Books', result)
   })
}

module.exports = getReadedBook

