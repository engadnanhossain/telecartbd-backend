import { config } from "../../../config";
import { IUser } from "./users.interface"
import { User } from "./users.model";
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'

const userCreateService = async ( payload:IUser) => {
    const {email, password} = payload;
    const isExist = await User.findOne({email});
    const hashPassword = await bcrypt.hash(password, 10)

    const user = {...payload, password:hashPassword};

    await User.create(user);

    let token;

    if(isExist){
        throw new Error('User already exist')
    }else{
     token = jwt.sign({
            name: user?.name,
            email: user?.email
          }, config.jwt_secret as Secret , { expiresIn: '7d' });
    }

    return token
}



const getAllUserService = async () => {
    const data = await User.find();
    return data
}


const getSingleUserService = async (email:string) => {
    const data = await User.findOne({email});
    return data
}

export = {
    userCreateService,
    getAllUserService,
    getSingleUserService
}