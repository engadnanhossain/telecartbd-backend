import { config } from "../../../config";
import { User } from "../users/users.model";
import { IUserLogin } from "./auth.interface";
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken'

const loginUserService = async (payload:IUserLogin) => {
    const {email, password} = payload;
    const isExist = await User.findOne({email});

    let token;

    if(isExist){
        const matchPassword = await bcrypt.compare(password, isExist?.password);
        if(matchPassword){
            token = jwt.sign({
                name: isExist?.name,
                email: isExist?.email
              }, config.jwt_secret as Secret , { expiresIn: '7d' });
        }else {
            console.log('Password Not match')
        }
    }else{
        console.log('Unauthorized')
    }
    return token;
}

export = {
    loginUserService
}