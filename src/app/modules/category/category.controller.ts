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


export = {
    createCategory
}