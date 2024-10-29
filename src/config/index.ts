import dotenv from 'dotenv';
dotenv.config();


export const config = { 
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    salt_rounds: process.env.SALT_ROUNDS,
    jwt_secret: process.env.JWT_SECRET
}