require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const {bookRouter} = require('./route/book.route')

const app = express()
app.use(bodyParser.json())

app.use('/api/book', bookRouter)

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Started listening on port 8080")
    })
}).catch(err => console.error(err));
