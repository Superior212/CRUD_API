const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoute = require('./routes/product.route');
const port = process.env.PORT || 3000;
const URI = process.env.URI;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', productRoute);



mongoose.connect(URI)
    .then(() => {
        console.log('Connected!')
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    }).catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });