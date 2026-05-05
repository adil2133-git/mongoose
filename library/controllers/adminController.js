const express = require("express")
const bcrypt = require("bcryptjs")
const adminModel = require("../models/adminModel")

const registerController = async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(401).json({ message: "all fields are required" })
        }

        const adminCheck = await adminModel.findOne({ username })

        if (adminCheck) {
            return res.status(409).json({ message: "Admin already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newAdmin = await adminModel.create({
            username,
            password: hashedPassword
        })

        return res.status(200).json({
            message: "Admin registered successfully",
            newAdmin
        })
    } catch (err) {
        return res.status(500).json({
            message: "Admin registration failed",
            Error: err.message
        })
    }
}

// const loginController = async (req, res) => {
//     try{
//         const {username, password} = req.body

//         if(!username || !password){
//             return res.status(401).json({message:"all fields are required"})
//         }


//     }catch(err){

//     }
// }

module.exports = { registerController }