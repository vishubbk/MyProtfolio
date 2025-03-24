const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Debug: Check if MONGODB_URI is loaded
const MONGODB_URI = process.env.MONGO_URI ;
const PORT = process.env.PORT || 5000;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in the environment variables.");
  process.exit(1);
}

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error(`❌ MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};
connectDB();

// Import models
const User = require('./models/MainModel');

// Initialize Express app
const app = express();
app.use(express.json());

// Enable CORS with specific options (adjust origin as needed)
app.use(cors({
  origin: 'https://myprotfolio-1-rfw9.onrender.com','http://localhost:5173/', // Change this to specific frontend domain in production
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// API Route to handle contact form submissions
app.post('/api/query', async (req, res) => {
  try {
    const { fullname, email, contact, message } = req.body;
    if (!fullname || !email || !contact || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({ fullname, email, contact, message });
    await newUser.save();

    res.status(201).json({ message: 'Query submitted successfully Wait for 24Hrs' });
  } catch (error) {
    console.error(`❌ Server error: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// API Route to get all queries
app.get('/api/queries', async (req, res) => {
  try {
    const queries = await User.find();
    res.status(200).json(queries);
  } catch (error) {
    console.error(`❌ Server error: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
