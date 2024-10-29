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


export = {
    userCreate
}