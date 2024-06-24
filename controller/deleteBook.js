const db = require('../db/connection')
const { response, responseWithData } = require('../utils/response')

const deleteBook = (req, res) => {
   const { id } = req.params

   if (!id) response(res, 404, "Failed", "Book ID not found!")

   const sql = `DELETE FROM books WHERE id = ?`
   db.query(sql, [id], (err, result) => {
      if (err) console.log(err)
      responseWithData(res, 200, "Success", `Delete book with id (${id})`, result)
   })
}

module.exports = deleteBook