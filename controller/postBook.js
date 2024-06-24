const db = require('../db/connection');
const { generateID, getCurrentDateTime, convertBoolToTinyInt } = require('../utils/function');
const { response, responseWithData } = require('../utils/response');

const postBook = (req, res) => {
   const { title, author, pageTotal, pageRead } = req.body;

   if (!title || !author || pageTotal === undefined || pageRead === undefined) {
      return response(res, 400, "Failed", "Please fill all the input!");
   }

   if (typeof pageTotal !== 'number' || typeof pageRead !== 'number') {
      return response(res, 400, "Failed", "Page total and page read must be numbers!");
   }

   if (pageTotal < 0 || pageRead < 0) {
      return response(res, 400, "Failed", "Page total and page read can't be less than zero!");
   }

   if (pageRead > pageTotal) {
      return response(res, 400, "Failed", "Page read can't be more than page total!");
   }

   const id = generateID();
   const isRead = convertBoolToTinyInt(pageRead > 0);
   const isFinished = convertBoolToTinyInt(pageRead === pageTotal);
   const createdAt = getCurrentDateTime();
   const updatedAt = getCurrentDateTime();

   const sql = `
      INSERT INTO books (id, title, author, page_total, page_read, is_read, is_finished, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
   `;
   const values = [
      id,
      title,
      author,
      pageTotal,
      pageRead,
      isRead,
      isFinished,
      createdAt,
      updatedAt
   ];

   db.query(sql, values, (err, result) => {
      if (err) {
         console.log(err);
         return response(res, 500, "Failed", "Error inserting book into the database");
      }
      responseWithData(res, 201, "Created", "Create new book", result);
   });
}

module.exports = postBook;
