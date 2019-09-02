require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()
const port = process.env.SERVER_PORT || 5000

const noteRoute = require('./src/route/routes')


app.use(logger('dev'))


app.listen(port, () => {
    console.log(`App listening to Port ${port}...`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.use('/', noteRoute)