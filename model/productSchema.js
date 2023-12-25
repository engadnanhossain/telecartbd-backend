const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
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
    slug: {
        type: String
    },
    model: {
        type: String
    },
    brnad: {
        type: String,
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"]
    },
    status: {
        type: String,
        required: [true, "status is required"]
    },
    categories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }],
    subCategory: [{
        type: mongoose.Types.ObjectId,
        ref: 'SubCategory'
    }],
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

module.exports = Product;