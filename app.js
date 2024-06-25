const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const getBooks = require('./controller/getBooks')
const getReadedBook = require('./controller/getReadedBook')
const postBook = require('./controller/postBook')
const updateBook = require('./controller/updateBook')
const deleteBook = require('./controller/deleteBook')
const app = express()
const host = "localhost"
const port = 9000

app.use(bodyParser.json())
app.use(cors())

app.get('/booklist-restful', getBooks)
app.get('/booklist-restful/readed', getReadedBook)
app.post('/booklist-restful', postBook)
app.put('/booklist-restful/:id', updateBook)
app.delete('/booklist-restful/:id', deleteBook)

app.listen(port, () => {
   console.log(`This app is running on http://${host}:${port}/booklist-restful`)
})
