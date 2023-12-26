const express = require('express');
const { addCartController, getAddtoCartController } = require('../controller/cartController');
const authGuard = require('../middlewares/authGuard');
const cartRouter = express();

cartRouter.post('/', addCartController); //add cart 
cartRouter.get('/', authGuard, getAddtoCartController); //get add cart 


module.exports = cartRouter;