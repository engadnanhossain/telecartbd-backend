import mongoose from "mongoose";
import app from "./app";
import { config } from "./config";


const dbConnection = async () => {
    try {
        mongoose.connect(config.database_url as string);
        console.log('Database is connected')
        app.listen(config.port, async() => {
            console.log(`App listening port ${config.port}`)
        })

    } catch (error) {
        console.error(error);
        console.log('Database is not connected')
    }
}

dbConnection()