const express = require('express');
const { addCartController, getAddtoCartController } = require('../controller/cartController');
const cartRouter = express();

cartRouter.post('/', addCartController); //add cart 
cartRouter.get('/', getAddtoCartController); //get add cart 


module.exports = cartRouter;