import { ICategory } from "./category.interface"
import { Category } from "./category.model"

const createCategoryService = async (payload:ICategory) => {
    const data = await Category.create(payload);
    return data
}

export ={
    createCategoryService
}