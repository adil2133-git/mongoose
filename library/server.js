const express = require("express")
require("dotenv").config()
const app = express()

const adminRoutes = require("./routes/adminRouter")

app.use(express.json())

app.use("/api/auth", adminRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})