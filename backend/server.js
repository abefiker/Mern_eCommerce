import dotenv from 'dotenv';
dotenv.config()
import connectDB from './config/db.js';
import express from 'express';
const port = process.env.PORT
import productRoutes from './routes/productRoutes.js';
import { notFound , errorHandler } from './middleware/errorMiddleware.js';
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
})
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})