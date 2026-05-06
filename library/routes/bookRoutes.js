const express = require("express")

const router = express.Router()

const auth = require("../middleware/authMiddleware")
const {addBook, getAllBooks, getBookById, updateBook} = require("../controllers/bookController")

router.post("/add", auth, addBook)
router.get("/books", auth, getAllBooks)
router.get("/book/:id", auth, getBookById)
router.put("/book/:id", auth, updateBook)

module.exports = router