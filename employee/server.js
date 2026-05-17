const express = require("express")
const connectDB = require("./config/db")
require("dotenv").config()

const PORT = process.env.PORT

const app = express()

connectDB()

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
}) 