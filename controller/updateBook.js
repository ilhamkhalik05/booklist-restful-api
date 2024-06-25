const db = require('../db/connection')
const { convertBoolToTinyInt, getCurrentDateTime } = require('../utils/function')
const { responseWithData, response, serverErrorResponse } = require('../utils/response')

const updateBook = (req, res) => {
   const { id } = req.params
   const { title, author, pageTotal, pageRead } = req.body

   if (!id) {
      response(res, 404, "Failed", "Please give the book ID as a parameter!")
      return
   }

   if (!title || !author || !pageTotal || !pageRead) {
      return response(res, 400, "Failed", "Please fill all the input!")
   }

   if (typeof pageTotal !== 'number' || typeof pageRead !== 'number') {
      return response(res, 400, "Failed", "Page total and page read must be a numbers!")
   }

   if (pageTotal < 0 || pageRead < 0) {
      return response(res, 400, "Failed", "Page total and page read can't be less than zero!")
   }

   if (pageRead > pageTotal) {
      return response(res, 400, "Failed", "Page read can't be more than page total!")
   }

   const isRead = convertBoolToTinyInt(pageRead > 0)
   const isFinished = convertBoolToTinyInt(pageRead === pageTotal)
   const updatedAt = getCurrentDateTime()

   const sql = `
      UPDATE books 
      SET title = ?, author = ?, page_total = ?, page_read = ?, is_read = ?, is_finished = ?, updated_at = ?
      WHERE id = ?
   `

   const values = [
      title,
      author,
      pageTotal,
      pageRead,
      isRead,
      isFinished,
      updatedAt,
      id
   ]

   db.query(sql, values, (err, result) => {
      if (err) {
         serverErrorResponse(res)
         return
      }

      responseWithData(res, 200, "Success", "Update book", result)
   })
}

module.exports = updateBook