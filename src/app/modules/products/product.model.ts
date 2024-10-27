import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const ProductSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
    },
    image: [
        {
            type: String,
        }
    ],
    category: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        name: String
    },
    subcategory: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Subcategory'
        },
        name: String
    },
    brand: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "pending"],
        default: "active",
        required: true,
    },
    purchasePrice: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0
    },
    alertQuantity: {
        type: Number,
    },
    totalSale: {
        type: Number
    },
}, {
    timestamps: true
});

export const Product = mongoose.model('Product', ProductSchema)