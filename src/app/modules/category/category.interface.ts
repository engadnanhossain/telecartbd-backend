import { Types } from "mongoose"
import { ISubcategory } from "../subcategory/subcategory.interface"

export type ICategory = {
    name: string,
    subCategory: Types.ObjectId | ISubcategory
}