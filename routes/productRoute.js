const express = require('express');
const { postProductController, getProductController, getSingleProductController, updateProudctController } = require('../controller/productController');
const productRouter = express();

// routes

productRouter.post('/', postProductController);
productRouter.get('/', getProductController);
productRouter.get('/:id', getSingleProductController);
productRouter.put('/:id', updateProudctController);

module.exports = productRouter;