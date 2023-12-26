const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    price: {
        type: Number,
        required: [true, "price is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    images: [],
    altTag: {
        type: String
    },
}, { timestamps: true })

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;