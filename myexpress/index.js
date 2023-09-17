const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Book } = require('./model/book')

const app = express()
app.use(bodyParser.json())

const books = [];

app.post("/api/book", async (req, res) => {
    const newBookBody = req.body
    const newBook = new Book({ name: newBookBody.name, author: newBookBody.author, price: newBookBody.price });
    await newBook.save()
    res.send(newBook, 201)
})

app.get("/api/book", async (req, res) => {
    const books = await Book.find({});
    res.send(books, 200)
})

app.get("/api/book/:bookid", async (req, res) => {
    // path params always come as string bu tmongo stores them ast objectid
    // so we would need to convert strung to objectid
    const bookid = new mongoose.Types.ObjectId(req.params.bookid);
    const book = await Book.findOne({ _id: bookid })

    if (book) {
        return res.send(book)
    } else {
        return res.send("Not found", 404)
    }
})

app.delete("/api/book/:bookid", async (req, res) => {
    const bookid = new mongoose.Types.ObjectId(req.params.bookid);
    const book = await Book.findOneAndDelete({ _id: bookid })
    if (book) {
        return res.send("Deleted")
    } else {
        return res.send("Not found", 404)
    }
})

app.put("/api/book/:bookid", async (req, res) => {
    const newDataBook = req.body;
    const bookid = new mongoose.Types.ObjectId(req.params.bookid);
    const updatedBook = await Book.findOneAndUpdate({
        _id: bookid
    }, newDataBook, {
        new: true
      });
    if (updatedBook) {
        return res.send(updatedBook)
    } else {
        return res.send("Not found", 404)
    }
})

mongoose.connect('mongodb+srv://abhinav:yUj5GxHhxGPx27p@angular-batch.davyyxc.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(8080, () => {
        console.log("Started listening on port 8080")
    })
}).catch(err => console.error(err));
