const express = require('express');
const router = express.Router();


const { addProduct, getProducts, getProductByID, getProductByName, editProduct, deleteProduct } = require('../controllers/product.controller');



router.post('/product', addProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductByID);
router.put('/product/:id', editProduct);
router.delete('/product/:id', deleteProduct);
router.get('/product', getProductByName);



module.exports = router;