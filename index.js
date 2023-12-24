const express = require('express');
const { default: mongoose } = require('mongoose');
const categoryRouter = require('./routes/categoryRoute');
const subCategoryRouter = require('./routes/subCategoryRoute');
const userRouter = require('./routes/userRoute');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/telecartbd');
        console.log('Db is connected')
    } catch (error) {
        console.log('Db is not connected');
        console.log(error.message);
    }
}

// router 
app.use('/api/category', categoryRouter);
app.use('/api/subcategory', subCategoryRouter);
app.use('/api/user', userRouter);

connectDb();
app.get('/', (req, res) => {
    res.send('Telecart Bd Server is runnig')
})

app.listen(port, () => {
    console.log(`server listening port ${port}`)
})