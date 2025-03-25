require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const queryRoutes = require("./Controllers/MainControllers");

const app = express();

// ✅ Connect to MongoDB
connectDB();



// 🔹 CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "https://myprotfolio-1-rfw9.onrender.com"],
    credentials: true,

  })
);

// Middleware
app.use(bodyParser.json());

// ✅ API Routes
app.use("/api/query", queryRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
