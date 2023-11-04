const express = require('express');
const Category = require('../model/categorySchema');
const categoryRouter = express.Router();


//post category
categoryRouter.post('/category', async (req, res) => {
    try {
        const categoryData = new Category({
            ...req.body
        })
        const result = await categoryData.save();
        if (result) {
            res.status(200).json({
                success: true,
                data: result
            })
        } else {
            res.status(404).json({ message: "category not post" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//get category
categoryRouter.get('/category', async (req, res) => {
    try {
        const categoryData = await Category.find();
        if (categoryData) {
            res.status(200).json({
                success: true,
                data: categoryData
            })
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = categoryRouter;