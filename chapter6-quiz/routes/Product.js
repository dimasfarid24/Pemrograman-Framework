const {createProduct, getProduct, getProductById, updateProduct, destroyProduct} = require('../controllers/ProductController')
const router = require('express').Router();

router.post('/produk', createProduct);
router.get('/produk', getProduct);
router.get('/produk/:id', getProductById);
router.put('/produk/:id', updateProduct);
router.delete('/produk/:id', destroyProduct);

module.exports = router;