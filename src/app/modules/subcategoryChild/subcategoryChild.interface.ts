import { Types } from "mongoose"
import { ISubcategory } from "../subcategory/subcategory.interface"

export type ISubcategoryChild = {
    name: string,
    subcategory: Types.ObjectId | ISubcategory
}