const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timeStamps: true})

const adminModel = mongoose.model("Admin", adminSchema)

module.exports = adminModel