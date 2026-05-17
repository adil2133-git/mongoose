const express = require("express")
const connectDB = require("./config/db")
require("dotenv").config()

const adminRoute = require("./routes/adminRoute")
const employeeRoute = require("./routes/employeeRoute")

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use("/api/admin", adminRoute)
app.use("/api/employee", employeeRoute)

connectDB()

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
}) 