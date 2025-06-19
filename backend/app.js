const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./auth_module/routes/signupRoute');
const contactRoute = require('./contact_module/route/contactRoute')
const BlogRoute = require('./blogs_module/route/blogRoute');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cookieParser()) 

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Replace with your frontend URL
  credentials: true // Allow cookies to be sent
}));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api', contactRoute);
app.use('/blog', BlogRoute);


connectDB()
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});