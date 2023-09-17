const { Book } = require('../model/book')

async function createBook(req, res) {
    const newBookBody = req.body
    const newBook = new Book({ name: newBookBody.name, author: newBookBody.author, price: newBookBody.price });
    await newBook.save()
    res.send(newBook, 201)
}

async function getAllBooks(req, res) {
    const books = await Book.find({});
    res.send(books, 200)
}

async function findABook(req, res) {
    // path params always come as string bu tmongo stores them ast objectid
    // so we would need to convert strung to objectid
    const bookid = new mongoose.Types.ObjectId(req.params.bookid);
    const book = await Book.findOne({ _id: bookid })

    if (book) {
        return res.send(book)
    } else {
        return res.send("Not found", 404)
    }
}

async function deleteBook(req, res) {
    const bookid = new mongoose.Types.ObjectId(req.params.bookid);
    const book = await Book.findOneAndDelete({ _id: bookid })
    if (book) {
        return res.send("Deleted")
    } else {
        return res.send("Not found", 404)
    }
}

async function updateBook(req, res) {
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
}

module.exports = {
    createBook,
    getAllBooks,
    findABook,
    deleteBook,
    updateBook
}