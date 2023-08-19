const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const books = [];

app.post("/api/book", (req, res) => {
    books.push(req.body)
    res.send("Data created", 201)
})

app.get("/api/book", (req, res) => {
    res.send(books)
})

app.get("/api/book/:bookid", (req, res) => {
    const bookid = parseInt(req.params.bookid);
    const book = books.find(book => book.id === bookid);
    if (book) {
        return res.send(book)
    } else {
        return res.send("Not found", 404)
    }
})  

app.delete("/api/book/:bookid", (req, res) => {
    const bookid = parseInt(req.params.bookid);
    const indexOfBook = books.findIndex(book => book.id === bookid);
    if (indexOfBook > -1) {
        books.splice(indexOfBook, 1);
        return res.send("Deleted")
    } else {
        return res.send("Not found", 404)
    }
})

app.put("/api/book/:bookid", (req, res) => {
    const newDataBook = req.body;
    const bookid = parseInt(req.params.bookid);
    const indexOfBook = books.findIndex(book => book.id === bookid);
    if (indexOfBook > -1) {
        books[indexOfBook]= newDataBook;
        return res.send("Book updated succesfully")
    } else {
        return res.send("Not found", 404)
    }
})

app.listen(8080, () => {
    console.log("Started listening on port 8080")
})