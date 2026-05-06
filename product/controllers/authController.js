const jwt = require("jsonwebtoken")

const loginController = (req, res) => {
    try {
        const { email, password } = req.body

        if (email !== "admin@store.com" || password !== "admin123") {
            return res.status(400).json({ message: "Invalid email or password" })
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY)

        res.status(200).json({ message: "Login successful", token: token })
    } catch (err) {
        res.status(500).json({ message: "Login failed", Error: err.message })
    }
}

module.exports = { loginController }