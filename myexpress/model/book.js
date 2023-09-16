const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

const Book = mongoose.model('book', bookSchema);

module.exports.Book = Book;