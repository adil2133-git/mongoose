const express = require("express")

const router = express.Router()

const auth = require("../middleware/authMiddleware")
const {addBook, getAllBooks} = require("../controllers/bookController")

router.post("/add", auth, addBook)
router.get("/books", auth, getAllBooks)

module.exports = router