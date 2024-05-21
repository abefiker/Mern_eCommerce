import exress from 'express'
const router = exress.Router()
import { getProductById,getProducts } from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;