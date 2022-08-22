const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
hotelRoute = require('./routes/hotels');
authRoute = require('./routes/auth');
roomRoute = require('./routes/rooms');
userRoute = require('./routes/users');
const app= express();
dotenv.config();
const connect  = async() => {
try {
    mongoose.connect(process.env.MONGO,{useNewUrlParser: true});
    console.log('Connected to MongoDB...');
} catch (error) {
    throw error;   
}
}

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// middleware routes
app.use("/api/hotel",hotelRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);

app.use("/api/room",roomRoute);

//error handling

app.use(function(err, req, res, next) {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong"
    res.status(errorStatus).json({
        success: false,
        status : errorStatus,
        message : errorMessage,
        stack :err.stack    
 });
});

app.listen(3000,()=>{
    connect()
    console.log('Server running at http://localhost:3000');
});