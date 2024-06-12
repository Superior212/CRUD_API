const express = require('express');
const router = express.Router();


const { addProduct, getProducts, getProductByID, getProductName } = require('../controllers/product.controller');



router.post('/add', addProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductByID);
router.get('/product', getProductName);



module.exports = router;