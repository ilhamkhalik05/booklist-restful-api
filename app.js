const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const host = "localhost"
const port = 9000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
   res.send("Hello World!")
})

app.listen(port, () => {
   console.log(`This app is running on http://${host}:${port}`)
})
