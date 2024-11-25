import { Request, Response } from "express";
import { catchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import httpStatus from 'http-status'
import { resultService } from "./bteb.service";


const getAllResult = catchAsync(async (req: Request, res: Response) => {
    const { exam, year, roll, reg } = req.query;

    const result = await resultService.getAllResultService({
        exam: exam as string,
        year: year as string,
        roll: roll as string,
        reg: reg as string,
    });

    if (result && Object.keys(result).length > 0) {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Result Get Successfully',
            data: result
        })
    } else {
        res.status(httpStatus.OK).json({
            success: false,
            statusCode: httpStatus.OK,
            message: 'Result Not Found',
        });
    }

})


export const resultsController = {
    getAllResult,
}