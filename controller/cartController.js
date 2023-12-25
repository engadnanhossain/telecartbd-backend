const Cart = require("../model/cartSchema");
const Product = require("../model/productSchema");
// add to cart 
const addCartController = async (req, res) => {
    try {
        const { quantity } = req.body;
        let updatePrice;
        const products = await Product.find({ _id: req.body.cartId });
        const { title, price, offerPrice, altTag, images } = products[0];

        if (offerPrice) {
            updatePrice = quantity * offerPrice;
        } else {
            updatePrice = quantity * price
        }

        const cart = new Cart({
            title,
            price: updatePrice,
            altTag,
            images
        });

        const result = await cart.save();
        if (result) {
            res.status(200).json({
                message: "Success",
                data: result
            })
        } else {
            res.status(404).json({ message: "cart not added" })
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get add to cart 
const getAddtoCartController = async (req, res) => {
    try {
        const products = await Cart.find();
        const totalPrice = products.reduce((sum, product) => sum + (product.price || 0), 0);
        if (products) {
            res.status(200).json({
                message: "Success",
                totalPrice,
                data: products,
            })
        } else {
            res.status(404).json({ message: "cart data not found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    addCartController,
    getAddtoCartController
}