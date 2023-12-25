const express = require('express');
const { postProductController, getProductController } = require('../controller/productController');
const productRouter = express();

// routes

productRouter.post('/', postProductController);
productRouter.get('/', getProductController);

module.exports = productRouter;