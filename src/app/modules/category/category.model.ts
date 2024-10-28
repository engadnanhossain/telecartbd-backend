import { Schema } from "mongoose";
import { ICategory } from "./category.interface";
import mongoose from "mongoose";

const categorySchema = new Schema<ICategory>({
name: {
    type: String,
    required: true
}
},{timestamps:true})

export const Category = mongoose.model('Category', categorySchema)