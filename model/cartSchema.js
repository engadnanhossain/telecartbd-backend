const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
    cartId: {
        type: String
    },
    title: {
        type: String,
        required: [true, "title is required"]
    },
    price: {
        type: Number,
        required: [true, "price is required"]
    },
    offerPrice: {
        type: Number
    },
    images: [],
    altTag: {
        type: String
    },
}, { timestamps: true })

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;