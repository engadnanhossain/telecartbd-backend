const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    subCategory: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'SubCategory'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;