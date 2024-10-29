import { Response } from "express";

type TMeta = {
    page: number;
    limit: number;
    total: number;
}

export type TResponseData<T> = {
success: boolean;
statusCode: number;
message: String;
meta?: TMeta;
data?: T | null | undefined
}


export const sendResponse = <T> ( res:Response, data:TResponseData<T>) => {
res.status(data.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data || undefined || null,
    meta: data.meta
})
}