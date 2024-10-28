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
    const result = await productsService.getAllProductsService();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'All Products Get Successfully',
        data: result
    })
})



const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await productsService.getSingleProductService(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Product Get Successfully',
        data: result
    })
})



const updateProduct = catchAsync(async (req: Request, res: Response) => {
    const {...payload} = req.body;
    const id = req.params.id;
    const result = await productsService.updateProductService(payload, id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Product Update Successfully',
        data: result
    })
})


export const productsController = {
    createProducts,
    getAllProducts,
    getSingleProduct,
    updateProduct
}