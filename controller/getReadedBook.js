const db = require('../db/connection')
const { responseWithData, serverErrorResponse, response } = require('../utils/response')

const getReadedBook = (req, res) => {
   const sql = `SELECT * FROM books WHERE is_read > 0`
   db.query(sql, (err, result) => {
      if (err) {
         return serverErrorResponse(res)
      }

      if (result.length === 0) {
         return response(res, 404, 'Failed', 'You haven\'t read a single book yet!')
      }

      return responseWithData(res, 200, 'Success', 'Get Readed Books', result)
   })
}

module.exports = getReadedBook

