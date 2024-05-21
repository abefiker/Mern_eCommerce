import exress from 'express'
const router = exress.Router()
// import Product from '../models/productModel';

import products from '../data/products.js'
router.get('/', async (req, res) => {
    // try {
    //     const products = await Product.find();
    //     res.json({
    //         products,
    //         success: true
    //     });
    // } catch (err) {
    //     res.json({
    //         success: false,
    //         message: err.message
    //     })
    // }
    res.json(products)
});
router.get('/:id', async (req, res) => {
    // try {
    //     const product = await Product.findById(req.params.id)
    //     res.json({
    //         product,
    //         success: true
    //     });
    // } catch (err) {
    //     res.json({
    //         success: false,
    //         message: err.message
    //     })
    // }
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

export default router;