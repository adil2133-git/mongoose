const express = require("express")
const app = express()


const connectDB = require("./config/db")
const adminRoutes = require("./routes/adminRoute")

app.use(express.json())

app.use("/api/auth", adminRoutes)

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})