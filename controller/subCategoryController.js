const Category = require("../model/categorySchema");
const SubCategory = require("../model/subCategorySchema");


// post sub category 
const postSubCategoryController = async (req, res) => {
    try {
        const subCategory = SubCategory({
            ...req.body
        })
        const result = await subCategory.save();
        await Category.updateOne(
            {
                _id: req.body.categoryId
            },
            {
                $push: {
                    subCategory: result._id
                }
            })
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// get sub category 

const getSubCategoryController = async (req, res) => {
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
}


module.exports = {
    postSubCategoryController,
    getSubCategoryController
}