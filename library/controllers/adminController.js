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

        res.status(200).json({
            message: "Admin registered successfully",
            newAdmin
        })
    } catch (err) {
        res.status(500).json({
            message: "Admin registration failed",
            Error: err.message
        })
    }
}


const loginController = async (req, res) => {
    try{
        const {username, password} = req.body

        const adminCheck = await adminModel.findOne({ username })

        if(!adminCheck){
            return res.status(404).json({message: "Admin not found"})
        }

        const passwordCheck = await bcrypt.compare(password, adminCheck.password)

        if(!passwordCheck){
            return res.status(400).json({message: "Invalid password"})
        }

        res.status(200).json({message:"Login successful"})
    }catch(err){
        res.status(500).json({message: "Login error", Error: err.message})
    }
}

module.exports =  {registerController, loginController} 