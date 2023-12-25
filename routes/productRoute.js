const express = require('express');
const { postProductController, getProductController, getSingleProductController } = require('../controller/productController');
const productRouter = express();

// routes

productRouter.post('/', postProductController);
productRouter.get('/', getProductController);
productRouter.get('/:id', getSingleProductController);

module.exports = productRouter;