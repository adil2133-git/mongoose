const express = require("express")

const router = express.Router()

const auth = require("../middleware/authMiddleware")
const {
    addProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    totalProducts, 
    productsByCategory
} = require("../controllers/productController")

router.post("/addProduct", auth, addProduct)
router.get("/products", auth, getAllProducts)
router.get("/product/:id", auth, getSingleProduct)
router.put("/product/:id", auth, updateProduct)
router.delete("/product/:id", auth, deleteProduct)
router.get("/total", auth, totalProducts)
router.get("/products/category", auth, productsByCategory)

module.exports = router