import mongoose, { Schema } from "mongoose";
import { ISubcategory } from "./subcategory.interface";

const subCategoryScehma = new Schema<ISubcategory>({
    name: {
        type: String,
        required: true
    }
},{timestamps: true});

export const Subcategory = mongoose.model('Subcategory', subCategoryScehma)