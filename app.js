const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const getBooks = require('./controller/getBooks')
const postBook = require('./controller/postBook')
const updateBook = require('./controller/updateBook')
const deleteBook = require('./controller/deleteBook')
const app = express()
const host = "localhost"
const port = 9000

app.use(bodyParser.json())
app.use(cors())

app.get('/book', getBooks)
app.post('/book', postBook)
app.put('/book/:id', updateBook)
app.delete('/book/:id', deleteBook)

app.listen(port, () => {
   console.log(`This app is running on http://${host}:${port}`)
})
