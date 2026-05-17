const employeeSchema = require("../model/employeeSchema")

const addEmployee = async (req, res) => {
    try {
        const { name, email, department, salary } = req.body

        if (!name || !email || !department || !salary) {
            return res.status(401).json({ message: "All fields required" })
        }

        const newEmployee = await employeeSchema.create({
            name,
            email,
            department,
            salary
        })

        if (!newEmployee) {
            return res.status(404).json({ message: "newEmployee not found" })
        }

        res.status(200).json({ message: "Employee added successfully", newEmployee })
    } catch (err) {
        res.status(500).json({ message: "Employee adding failed", Error: err.message })
    }
}

const getEmployees = async (req, res) => {
    try{
        const employees = await employeeSchema.find()

        if(!employees){
            return res.status(404).json({message:"Employees not found"})
        }

        res.status(200).json({message: "Employees", employees})
    }catch(err){
        res.status(500).json({message: "getEmployees failed", Error: err.message})
    }
}

const getSingleEmployee = async (req, res) => {
    try{
        const {id} = req.params.id

        const employee = await employeeSchema.find({id})

        if(!employee){
            return res.status(404).json({message: "Employee not found"})
        }

        res.status(200).json({message: "Employee", employee})
    }catch(err){
        res.status(500).json({message: "Error while finding employee", Error: err.message})
    }
}

const updateEmployee = async (req, res) => {
    try{
        const {name, email, department, salary} = req.body

        const {id} = req.params

        const employee = await employeeSchema.findById(id)

        if(!employee){
            return res.status(404).json({message: "Employee not found"})
        }

        const updatedData = {
            name,
            email,
            department,
            salary
        }

        if(!updatedData){
            return res.status(404).json("NO data found")
        }

        const updated = await employeeSchema.findByIdAndUpdate(
            id,
            updatedData
        )

        res.status(200).json({message: "Employee updated", updatedData})
    }catch(err){
        res.status(500).json({message: "Error while updating employee", Error: err.message})
    }
}

module.exports = { addEmployee, getEmployees, getSingleEmployee, updateEmployee }