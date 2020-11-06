const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const sequilize = require(path.join(__dirname, './database'))
const router = require("./router.js")
const bodyParser = require("body-parser")

app.use(express.static('./client/dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', router)

app.listen(port, () => console.log(`Listening on port ${port}`))