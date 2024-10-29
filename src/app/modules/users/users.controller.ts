import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import usersService from "./users.service";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";

const userCreate = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const result = await usersService.userCreateService(data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Signup Successfull",
        data: result
    })
});



const getAllUser = catchAsync(async (req: Request, res: Response) => {
    const result = await usersService.getAllUserService();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Fetch All Users Successfully',
        data: result
    })
});



const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const email = req.params.email;
    const result = await usersService.getSingleUserService(email);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Fetch Single User Successfully',
        data: result
    })
})


export = {
    userCreate,
    getAllUser,
    getSingleUser
}