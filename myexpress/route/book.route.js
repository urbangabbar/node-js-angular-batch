const express = require('express')
const { createBook, getAllBooks, findABook, deleteBook, updateBook } = require('../service/book.service');

const router = express.Router()

router.post("/", createBook)
router.get("/", getAllBooks)
router.get("/:bookid", findABook)
router.delete("/:bookid", deleteBook)
router.put("/:bookid", updateBook)

module.exports.bookRouter = router;