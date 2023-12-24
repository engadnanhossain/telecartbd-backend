const express = require('express');
const { postSubCategoryController, getSubCategoryController } = require('../controller/subCategoryController');
const subCategoryRouter = express.Router();

//post sub category

subCategoryRouter.post('/', postSubCategoryController)

//get subcateory
subCategoryRouter.get('/', getSubCategoryController)

module.exports = subCategoryRouter;