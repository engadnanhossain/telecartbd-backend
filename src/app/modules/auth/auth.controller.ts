import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import authService from "./auth.service";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const result = await authService.loginUserService(data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Login Successfull',
        data: result
    })
});

export = {
    loginUser
}