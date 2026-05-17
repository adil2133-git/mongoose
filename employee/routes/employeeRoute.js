const express = require("express")
const { addEmployee } = require("../controller/employeeController")
const protectRoute = require("../middleware/protectRotue")

const router = express.Router()

router.post("/add", protectRoute, addEmployee)

module.exports = router