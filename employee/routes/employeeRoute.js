const express = require("express")
const { addEmployee, getEmployees, getSingleEmployee, updateEmployee, deleteEmployee } = require("../controller/employeeController")
const protectRoute = require("../middleware/protectRotue")

const router = express.Router()

router.post("/add", protectRoute, addEmployee)
router.get("/", protectRoute, getEmployees)
router.get("/:id", protectRoute, getSingleEmployee)
router.put("/:id", protectRoute, updateEmployee)
router.delete("/:id", protectRoute, deleteEmployee)

module.exports = router