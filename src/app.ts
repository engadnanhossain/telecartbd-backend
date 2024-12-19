import express, { Request, Response } from 'express';
import cors from 'cors';
import { routes } from './app/routes';
import httpStatus from 'http-status';
const app = express();


// middleware 
app.use(express.json());
app.use(cors());


app.use('/api/v1', routes)

app.get('/',async(req: Request, res: Response) => {
    try {
        res.status(200).json({
            statusCode: httpStatus.OK,
            success: true,
            message: 'Server Running',
            author: 'Adnan Hossain'
        })
    } catch (error: any) {
        console.error('error', error);
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
})

export default app