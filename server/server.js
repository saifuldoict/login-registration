import express from 'express';
const app = express();
import 'dotenv/config';
import cors from 'cors';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRouter.js';



app.use(express.json());
app.use(express.urlencoded({ extended: true , limit: '50mb' }));
app.use(cors());


await connectDB()
app.get('/', (req, res) => {
    res.send('server is running!');
})

app.use('/api/user', userRouter)

// Error handling middleware
app.use((error, req, res, next) => {
    const message = error.message || 'Internal Server Error';
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: message,
    });
    
});


app.listen(process.env.PORT || 5100, () => {
    console.log(`Server is running on port ${process.env.PORT || 5100}`);
});