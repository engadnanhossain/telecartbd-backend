import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import { productsService } from "./product.service";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from 'http-status'

const createProducts = catchAsync(async (req:Request, res:Response) => {
    const data = req.body;
    const result = await productsService.createProductsService(data);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Product Upload Successfull',
        data: result
    })
})

const getAllProducts = catchAsync(async (req: Request, res:Response) => {
    const result = productsService.getAllProductsService();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'All Products Get Successfully',
        data: result
    })
})

export const productsController = {
    createProducts,
    getAllProducts
}