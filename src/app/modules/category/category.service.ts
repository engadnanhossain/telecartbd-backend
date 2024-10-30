import { ICategory } from "./category.interface"
import { Category } from "./category.model"

const createCategoryService = async (payload:ICategory) => {
    const data = await Category.create(payload);
    return data
}


// get all category 
const getAllCategoryService = async() => {
    const data = await Category.find()
    .populate('subCategory');
    return data
}


const getSingleCategoryService = async (id: string) => {
    const data = await Category.findById({_id: id});
    return data
}


const updateCategoryService = async (payload: ICategory, id: string) => {
    const data = await Category.findByIdAndUpdate(id, payload);
    return data
}

const deleteCategoryServce = async (id: string) => {
    const data = await Category.findByIdAndDelete(id);
    return data
}

export ={
    createCategoryService,
    getAllCategoryService,
    getSingleCategoryService,
    updateCategoryService,
    deleteCategoryServce
}