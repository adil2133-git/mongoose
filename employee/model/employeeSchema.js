const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    joiningDate:{
        type: Date,
        default: Date.now()
    }
}, {timestamps: true})

const employeeModel = mongoose.model("employee", employeeSchema)

module.exports = employeeModel