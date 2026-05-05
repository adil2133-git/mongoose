const express = require("express")
const productModel = require("../model/productModel")

const router = express.Router()

router.get("/", (req, res) => {

    const totalProducts = await productModel.countDocuments()

    res.status(200).json({
        totalProducts: totalProducts
    })
})