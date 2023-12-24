const express = require('express');
const { postCategoryController, getCategoryController } = require('../controller/categoryController');
const categoryRouter = express.Router();


//post category
categoryRouter.post('/', postCategoryController)

//get category
categoryRouter.get('/', getCategoryController)

module.exports = categoryRouter;