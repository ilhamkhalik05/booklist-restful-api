const db = require('../db/connection')
const { response, responseWithData, serverErrorResponse } = require('../utils/response')

const deleteBook = (req, res) => {
   const { id } = req.params

   if (!id) {
      response(res, 404, "Failed", "Please give the book ID as a parameter!")
      return
   }

   const sql = `DELETE FROM books WHERE id = ?`
   db.query(sql, [id], (err, result) => {
      if (err) {
         serverErrorResponse(res)
         return
      }

      responseWithData(res, 200, "Success", `Delete book with id (${id})`, result)
   })
}

module.exports = deleteBook