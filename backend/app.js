const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./auth_module/routes/signupRoute');
const contactRoute = require('./contact_module/route/contactRoute')
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

mongoose.connect('mongodb://localhost:27017/medicare_plus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});