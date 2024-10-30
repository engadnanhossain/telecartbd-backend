import mongoose, { Schema, Types } from "mongoose";
import { ISubcategory } from "./subcategory.interface";

const subCategoryScehma = new Schema<ISubcategory>({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Types.ObjectId,
        ref: 'Category'
    }
},{timestamps: true});

export const Subcategory = mongoose.model('Subcategory', subCategoryScehma)