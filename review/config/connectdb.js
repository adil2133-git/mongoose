const mongoose = require("mongoose")
require("dotenv").config()

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected")
    }catch(e){
        console.log("connection file",e.message)
    }
}

module.exports=connectdb;