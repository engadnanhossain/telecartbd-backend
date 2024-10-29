import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import subcategoryService from "./subcategory.service";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";

const createSubcategory = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const result = await subcategoryService.createSubcategoryService(data);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Subcategory Created Successfully',
        data: result
    })
});



const getAllSubcategory = catchAsync(async (req: Request, res: Response) => {
    const result = await subcategoryService.getAllSubcategoryService();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Get All Subcategory Successfully',
        data: result
    })
});



const getSingleSubcategory = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await subcategoryService.getSingleSubcategoryService(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Get Subcategory Successfully',
        data: result
    })
});




const updateSubcategory = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await subcategoryService.updateSubcategoryService(id, data);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Update Subcategory Successfully',
        data: result
    })
});



const deleteSubcategory = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await subcategoryService.deleteSubcategoryService(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Delete Subcategory Successfully',
        data: result
    })
});


export = {
    createSubcategory,
    getAllSubcategory,
    getSingleSubcategory,
    updateSubcategory,
    deleteSubcategory
}