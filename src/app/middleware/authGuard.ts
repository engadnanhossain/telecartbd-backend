import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { config } from "../../config";

export const authGuard = (req: Request & { name?: string; email?: string }, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: "Unauthorized Access" });
        return;
    }

    try {
        const decode = jwt.verify(token, config.jwt_secret as Secret) as JwtPayload;
        req.name = decode?.name;
        req.email = decode?.email;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "Invalid token" });
    }
};
