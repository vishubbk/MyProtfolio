require("dotenv").config();
const express = require("express");
const cors = require("cors");
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

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middleware
app.use(bodyParser.json());

// ✅ API Routes
app.use("/api/query", queryRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
