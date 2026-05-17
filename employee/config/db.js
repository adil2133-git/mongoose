const mongoose = require("mongoose")

const connectDB = async () => {
    try{
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("DATABASE CONNECTED SUCCESSFULLY")
    }catch(err){
        console.log("DATABASE CONNECTION FAILED")
    }
}

module.exports = connectDB