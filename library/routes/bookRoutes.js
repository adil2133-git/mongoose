const express = require("express")

const router = express.Router()

const auth = require("../middleware/authMiddleware")
const {addBook, getAllBooks, getBookById, updateBook, deleteBook} = require("../controllers/bookController")

router.post("/add", auth, addBook)
router.get("/books", auth, getAllBooks)
router.get("/book/:id", auth, getBookById)
router.put("/book/:id", auth, updateBook)
router.delete("/book/:id", auth, deleteBook)

module.exports = router