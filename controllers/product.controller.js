const Product = require('../models/product.model');
// add a product
const addProduct = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        // const product = new Product({ name, price, quantity });
        // product.save();

        // can also use create to save the data
        const product = await Product.create({ name, price, quantity });
        res.status(201).json({ message: 'Product created successfully', product: product });
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
};

// get all products
const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json({ message: product });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products", error: error.message });
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
        res.status(500).json({ message: "Error retrieving product", error: error.message });
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
        res.status(500).json({ message: "Error retrieving product", error: error.message });
    }
}

//  edit product
const editProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            res.status(404).json({ message: '"Error updating product' });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
}
module.exports = {
    addProduct,
    getProducts,
    getProductByID, getProductName, editProduct
};