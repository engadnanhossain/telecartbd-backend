import { Schema, Types } from "mongoose";
import { ICategory } from "./category.interface";
import mongoose from "mongoose";

const categorySchema = new Schema<ICategory>({
name: {
    type: String,
    required: true
},
subCategory: [
    {
        type: Types.ObjectId,
        ref: 'Subcategory'
    }
]
},{timestamps:true})

export const Category = mongoose.model('Category', categorySchema)