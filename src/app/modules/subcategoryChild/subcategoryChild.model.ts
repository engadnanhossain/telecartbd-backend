import mongoose, { Schema, Types } from "mongoose";
import { ISubcategoryChild } from "./subcategoryChild.interface";

const subcategoryChildSchema = new Schema<ISubcategoryChild>({
    name: {
        type: String,
        required: true,
    },
    subcategory: {
            type: Types.ObjectId,
            ref: 'Subcategory'
        }
    
},{timestamps:true});

export const SubcategoryChild =  mongoose.model('SubcategoryChild', subcategoryChildSchema)