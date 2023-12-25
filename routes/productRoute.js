const express = require('express');
const { postProductController, getProductController, getSingleProductController, updateProudctController, deleteProductController } = require('../controller/productController');
const productRouter = express();

// routes

productRouter.post('/', postProductController);
productRouter.get('/', getProductController);
productRouter.get('/:id', getSingleProductController);
productRouter.put('/:id', updateProudctController);
productRouter.delete('/:id', deleteProductController);

module.exports = productRouter;