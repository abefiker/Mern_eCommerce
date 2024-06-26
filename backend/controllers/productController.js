import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products) {
        res.json(products);
    } else {
        res.status(404)
        throw new Error('Resource not found')
    }
})

const getProductById =  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Resource not found')
    }
})

export {getProductById, getProducts}