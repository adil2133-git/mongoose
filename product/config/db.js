const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database Connected")        
    }catch(err){
        console.log("Database connection Failed", err)
    }
}

module.exports = connectDB