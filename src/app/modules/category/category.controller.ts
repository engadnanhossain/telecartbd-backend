import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import categoryService from "./category.service";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";

const createCategory = catchAsync(async (req:Request, res:Response) => {
    const data = req.body;
    const result = await categoryService.createCategoryService(data);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category Created Successfully',
        data: result
    })
});




const getAllCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryService.getAllCategoryService();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category Get Successfully',
        data: result
    })
})



const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await categoryService.getSingleCategoryService(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category Get Successfully',
        data: result
    })
});



const updateCategory = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await categoryService.updateCategoryService(data, id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category Update Successfully',
        data: result
    })
});




const deleteCategory = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await categoryService.deleteCategoryServce(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category Deleted Successfully',
        data: result
    })
})


export = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory
}