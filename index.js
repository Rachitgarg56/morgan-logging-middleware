const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8080;

morgan.token('ip', (req) => req.ip);
morgan.token('timestamp', () => new Date().toISOString());

const customFormat = ':ip - :method :url :timestamp';

app.use(express.json());
app.use(morgan(customFormat));

app.get('/api/v1/products', (req,res) => {
    res.json({
        response: 'SUCCESS'
    })
})

app.post('/api/v1/products', (req,res) => {
    res.json({
        response: 'SUCCESS'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

