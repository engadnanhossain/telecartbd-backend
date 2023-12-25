const express = require('express');
const { addCartController } = require('../controller/cartController');
const cartRouter = express();

cartRouter.post('/', addCartController); //add cart 


module.exports = cartRouter;