const Product = require('../models/product.model');

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

module.exports = {
    addProduct,
};