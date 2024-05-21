import exress from 'express'
const router = exress.Router()
import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products) {
        res.json(products);
    } else {
        res.status(404)
        throw new Error('Resource not found')
    }
}));

router.get('/:id', asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Resource not found')
    }
}));

export default router;