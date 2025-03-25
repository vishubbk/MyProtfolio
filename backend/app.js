require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression"); // Compress responses
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const queryRoutes = require("./Controllers/MainControllers");

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Allowed Origins
const allowedOrigins = [
  "https://myprotfolio-1-rfw9.onrender.com",
  "http://localhost:5173"
];

// ✅ Middleware
app.use(express.json()); // Built-in JSON parser
app.use(compression()); // Compress responses

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        // Allow the request
        callback(null, true);
      } else {
        // Reject the request if the origin is not allowed
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowing the methods your API supports
    allowedHeaders: ["Content-Type", "Authorization"], // Allowing headers like Content-Type, Authorization, etc.
    credentials: true, // Allow credentials if needed (cookies, authorization headers, etc.)
  })
);

// ✅ API Routes
app.use("/api/query", queryRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
