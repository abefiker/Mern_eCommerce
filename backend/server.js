import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const port = process.env.PORT 
const app = express();
import products from './data/products.js';
app.get('/', (req, res) => {
    res.send('am the back')
})
app.get('/api/products', (req, res) => {
    res.json(products)
});
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})