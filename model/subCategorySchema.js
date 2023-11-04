const { default: mongoose } = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
module.exports = SubCategory;