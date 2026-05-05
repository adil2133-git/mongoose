const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message: "No token found"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.admin = decoded
        next()
    }catch(err){
        res.status(400).json({message: "Invalid Token"})
    }
}