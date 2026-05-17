const express = require("express")
const { addEmployee, getEmployees } = require("../controller/employeeController")
const protectRoute = require("../middleware/protectRotue")

const router = express.Router()

router.post("/add", protectRoute, addEmployee)
router.get("/", protectRoute, getEmployees)

module.exports = router