const { default: mongoose, Schema } = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
        
    }
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
module.exports = SubCategory;