const express = require("express")

const router = express.Router()

const {loginController} = require("../controllers/authController")
const auth = require("../middleware/authMiddleware")

router.post("/login", loginController)

module.exports = router