const express = require("express")

const router = express.Router()

const registerController = require("../controllers/adminController")
const loginController = require("../controllers/adminController")

router.post("/register", registerController)
router.post("/login", loginController)

module.exports = router