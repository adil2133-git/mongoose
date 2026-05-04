const mongoose = require("mongoose")

const connectdb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://Aadhy:Adil%40123@cluster0.zvtr8is.mongodb.net/UserDatas");
        console.log("Database connected")
    }catch(e){
        console.log("connection file",e.message)
    }
}

module.exports=connectdb;