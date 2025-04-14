const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
const app = express();

//body parse
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));



const PORT = process.env.PORT || 5000;


//routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', productRoutes);
// Allow CORS with custom headers
app.get('/', (req, res) => {
    return res.json({
        message : 'API is running...'
    })
})

app.listen(PORT, async ()=>{
    try {
        await connectDB();
        console.log(`server listening on port ${PORT}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
    
})