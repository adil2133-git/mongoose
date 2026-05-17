const employeeSchema = require("../model/employeeSchema")

const addEmployee = (req, res) => {
    try{
        const {name, email, department, salary} = req.body

        if(!name || !email || !department || !salary){
            return res.status(401).json({message: "All fields required"})
        }

        const newEmployee = await employeeSchema.create(
            name,
            email,
            department,
            salary
        )

        if(!newEmployee){
            return res.status(404).json({message: "newEmployee not found"})
        }

        res.status(200).json({message:"Employee added successfully", newEmployee})
    }catch(err){
        res.status(500).json({message:"Employee adding failed", Error: err.message})
    }
}

module.exports = {addEmployee}