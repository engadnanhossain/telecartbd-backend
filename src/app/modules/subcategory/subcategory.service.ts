import { Category } from "../category/category.model";
import { ISubcategory } from "./subcategory.interface"
import { Subcategory } from "./subcategory.model"

const createSubcategoryService = async (payload:ISubcategory) => {
    const data = await Subcategory.create(payload);
    await Category.findByIdAndUpdate(payload.category, {
        $push: { subCategory: data._id }
    });
    return data;
};




const getAllSubcategoryService = async () => {
    const data = await Subcategory.find();
    return data;
};




const getSingleSubcategoryService = async (id:string) => {
    const data = await Subcategory.findById({_id: id});
    return data;
}




const updateSubcategoryService = async (id:string, payload:ISubcategory) => {
    const data = await Subcategory.findByIdAndUpdate(id, payload);
    return data
}


const deleteSubcategoryService = async (id:string) => {
    const data = await Subcategory.findByIdAndDelete(id);
    return data
}



export = {
    createSubcategoryService,
    getAllSubcategoryService,
    getSingleSubcategoryService,
    updateSubcategoryService,
    deleteSubcategoryService
}