const jwt = require("jsonwebtoken")
require("dotenv").config()

const protectRoute = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(404).json({message: "Token not found"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.admin = decoded
        next()
    }catch(err){
        res.status(400).json({message: "Invalid token"})
    }
}

module.exports = protectRoute