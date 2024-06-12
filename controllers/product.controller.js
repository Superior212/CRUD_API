const Product = require('../models/product.model');
// add a product
const addProduct = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        // const product = new Product({ name, price, quantity });
        // product.save();

        // can also use create to save the data
        const product = await Product.create({ name, price, quantity });
        res.status(200).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get all products
const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json({ message: product });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
// get product by ID
const getProductByID = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product found', product: product });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//  get product by name
const getProductName = async (req, res) => {
    try {
        const { name } = req.query;
        const product = await Product.findOne({ name: name });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product found', product: product });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    addProduct,
    getProducts,
    getProductByID, getProductName
};