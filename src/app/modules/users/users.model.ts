import mongoose, { Schema } from "mongoose";
import { IUser } from "./users.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    dob: {
        type: String
    }
},{timestamps: true});

export const User = mongoose.model('User', userSchema)