import { JwtPayload } from "jsonwebtoken";

declare global{
    namespace Express{
        interface Request{
            name?:JwtPayload;
            email?:JwtPayload
        }
    }
}