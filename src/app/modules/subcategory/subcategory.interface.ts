import { Types } from "mongoose"
import { ICategory } from "../category/category.interface"

export type ISubcategory = {
    name: string,
    category: Types.ObjectId | ICategory
}