const Category = require("../model/categorySchema");


// post controller 
const postCategoryController = async (req, res) => {
    try {
        const categoryData = new Category({
            ...req.body
        })
        const result = await categoryData.save();

        res.status(200).json({
            success: true,
            data: result
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// get controller 

const getCategoryController = async (req, res) => {
    try {
        const categoryData = await Category.find().populate("subCategory");
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
}

module.exports = {
    postCategoryController,
    getCategoryController
}