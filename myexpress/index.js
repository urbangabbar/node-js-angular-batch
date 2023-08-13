const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json()) 

const books = [];

app.post("/api/book", (req,res)=> {
    books.push(req.body)
    res.send("Data created", 201)
})

app.get("/api/book", (req,res)=> {
   res.send(books) 
})

app.listen(8080, ()=>{
    console.log("Started listening on port 8080")
})