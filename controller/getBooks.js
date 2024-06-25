const db = require('../db/connection')
const { responseWithData, serverErrorResponse } = require('../utils/response')

const getBooks = (req, res) => {
   const { search } = req.query
   const sql = "SELECT * FROM books"

   db.query(sql, (err, result) => {
      if (err) {
         return serverErrorResponse(res)
      }

      let books = result

      if (!search) {
         return responseWithData(res, 200, "Success", "Get Books", books)
      }

      const searchedBook = books.filter(({ title, author }) =>
         title.toLowerCase().trim() === search.toLowerCase().trim() ||
         author.toLowerCase().trim() === search.toLowerCase().trim()
      )

      responseWithData(res, 200, "Success", "Get Searched Book", searchedBook)
   })
}

module.exports = getBooks
