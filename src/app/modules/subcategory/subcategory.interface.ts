import { Types } from "mongoose"
import { ICategory } from "../category/category.interface"
import { ISubcategoryChild } from "../subcategoryChild/subcategoryChild.interface"

export type ISubcategory = {
    name: string,
    category: Types.ObjectId | ICategory,
    subcategoryChild: Types.ObjectId | ISubcategoryChild
}