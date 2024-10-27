import express, { Request, Response } from 'express';
import cors from 'cors';
import { routes } from './app/routes';
const app = express();


// middleware 
app.use(express.json());
app.use(cors());


app.use('/api/v1', routes)

app.get('/',async(req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Server Running'
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