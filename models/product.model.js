
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product Name is required']
    },
    price: {
        type: Number,
        required: [true, 'Product Price is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Product Quantity is required']
    },

    Timestamp: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema);


module.exports = Product;