const express = require("express")
const app = express()


const connectDB = require("./config/db")
const adminRoutes = require("./routes/adminRoute")
const productRoutes = require("./routes/productRoute")

app.use(express.json())

app.use("/api/auth", adminRoutes)
app.use("/api", productRoutes)

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})