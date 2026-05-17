const productModel = require("../models/productModel")

const addProduct = async (req, res) => {
    try {
        const { name, price, category, stock } = req.body

        if (!name || !price || !category || !stock) {
            return res.status(400).json("All fields required")
        }

        const isExisting = await productModel.findOne({name})

        if(isExisting){
            return res.status(401).json("Product already exists")
        }

        const product = await productModel.create({
            name,
            price,
            category,
            stock
        })

        if (!product) {
            return res.status(404).json({ message: "No product found" })
        }

        res.status(200).json({ message: "Product added successfully", product })
    } catch (err) {
        res.status(500).json({ message: "Failed to add product", Error: err.message })
    }
}


const getAllProducts = async (req, res) => {
    try{
        const products = await productModel.find()

        if(!products){
            return res.status(404).json("No products found")
        }

        res.status(200).json({message: "Proudcts fetched successfully", products})
    }catch(err){
        res.status(500).json({message: "Products fetching Failed", Error: err.message})
    }
}

const getSingleProduct = async (req, res) => {
    try{
        const id = req.params.id

        const product = await productModel.findById(id)

        if(!product){
            return res.status(404).json("Product not found")
        }

        res.status(200).json({message: "Product fetched successfully", product})
    }catch(err){
        res.status(500).json({message: "Failed to fetch product", Error: err.message})
    }
}


const updateProduct = async (req, res) => {
    try{
        const {name, price, category, stock} = req.body

        const id = req.params.id

        const product = await productModel.findById(id)

        if(!product){
            return res.status(404).json("Product not found")
        }

        const updatedProduct = {
            name,
            price,
            category,
            stock
        }

        if(!updatedProduct){
            return res.status(400).json("All fields required")
        }

        const updated = await productModel.findByIdAndUpdate(
            id,
            updatedProduct
        )

        res.status(200).json({ message: "Proudct updated successfully", updatedProduct})
    }catch(err){
        res.status(500).json({message: "Proudct updation failed", Error: err.message})
    }
}

const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id

        const product = await productModel.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json("Proudct not found")
        }

        res.status(200).json({message: "Product deleted successfully", product})
    }catch(err){
        res.status(500).json({message: "Proudct deletion failed", Error: err.message})
    }
}

const totalProducts = async (req, res) => {
    try{
        const products = await productModel.find()

        if(!products){
            return res.status(404).json("No Proudcts found")
        }

        const total = products.length

        res.status(200).json({message: "Total products", total})
    }catch(err){
        res.status(500).json({message: "Total products error", Error: err.message})
    }
}

const productsByCategory = async (req, res) => {
    try{
        const {category} = req.query

        const filter = {}
        
        if(category){
            filter.category = category
        }

        const products = await productModel.find(filter)
        
        res.status(200).json({message:"Products filtered by category", products})
    }catch(err){
        res.status(500).json({message: "Error filtering products by category", Error: err.message})
    }
}

module.exports = { 
    addProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    totalProducts, 
    productsByCategory 
}