const express = require('express');
const SubCategory = require('../model/subCategorySchema');
const subCategoryRouter = express.Router();

//post sub category

subCategoryRouter.post('/subcategory', async (req, res) => {
    try {
        const subCategory = SubCategory({
            ...req.body
        })
        const result = await subCategory.save();
        if (result) {
            res.status(200).json({
                success: true,
                data: result
            })
        } else {
            res.status(404).json({ message: 'sub category not post' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get subcateory
subCategoryRouter.get('/subcategory', async (req, res) => {
    try {
        const subCategory = await SubCategory.find();
        if (subCategory) {
            res.status(200).json({
                success: true,
                data: subCategory
            })
        } else {
            res.status(404).json({ message: "sub category not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = subCategoryRouter;