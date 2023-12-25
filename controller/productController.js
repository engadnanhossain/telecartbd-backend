const Product = require("../model/productSchema")

// post product controller 
const postProductController = async (req, res) => {
    try {
        const product = new Product({ ...req.body })
        const result = await product.save();
        res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    postProductController
}