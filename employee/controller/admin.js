const express = require("express")

const loginController = (req, res) => {
    try{
        const {email, password} = req.body

        if(email !== "hr@company.com" && password !== "hr123"){
            res.status(401).json({message:"Invalid email or password"})
        }

        res.status(200).json({message: "Login successful"})
    }catch(err){
        res.status(500).json({message:"Login Failed"})
    }
}

module.exports = loginController