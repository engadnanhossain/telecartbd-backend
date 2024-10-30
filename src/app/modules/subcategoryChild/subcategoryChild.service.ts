import { Subcategory } from "../subcategory/subcategory.model";
import { ISubcategoryChild } from "./subcategoryChild.interface";
import { SubcategoryChild } from "./subcategoryChild.model";

const createSubcategoryChildService = async (payload:ISubcategoryChild) => {
    const data = await SubcategoryChild.create(payload);

    await Subcategory.findOneAndUpdate(
        { _id: payload.subcategory },
        { $push: { subcategoryChild: data._id } }
    );

    return data
};


export = {
    createSubcategoryChildService
}