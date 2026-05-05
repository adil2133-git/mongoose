const express = require("express")

const router = express.Router()

const auth = require("../middleware/authMiddleware")
const {addBook} = require("../controllers/bookController")

router.post("/add", auth, addBook)

module.exports = router