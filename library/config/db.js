const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("DATABASE CONNECTED")
    } catch (err) {
        console.log("DATABASE CONNECTION FAILED", err.message)
    }
} 

module.exports = connectDB