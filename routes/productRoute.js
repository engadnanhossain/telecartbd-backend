const express = require('express');
const { postProductController } = require('../controller/productController');
const productRouter = express();

// routes

productRouter.post('/', postProductController);

module.exports = productRouter;