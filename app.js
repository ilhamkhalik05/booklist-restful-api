const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const getBooks = require('./controller/getBooks')
const postBook = require('./controller/postBook')
const app = express()
const host = "localhost"
const port = 9000

app.use(bodyParser.json())
app.use(cors())

app.get('/book', getBooks)
app.post('/book', postBook)

app.listen(port, () => {
   console.log(`This app is running on http://${host}:${port}`)
})
