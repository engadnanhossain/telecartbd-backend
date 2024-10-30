import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import subcategoryChildService from "./subcategoryChild.service";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";

const createSubcategoryChild = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const result = await subcategoryChildService.createSubcategoryChildService(data);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Subcategory Child created successfully',
        data: result
    })
});



export = {
    createSubcategoryChild
}