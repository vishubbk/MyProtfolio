require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const queryRoutes = require("./Controllers/MainControllers");

const app = express();

// ✅ Connect to MongoDB
connectDB();

// 🔹 CORS Configuration (💡 must come before other middleware & routes)
const allowedOrigins = [
  "http://localhost:5173",
  "https://myprotfolio-1-rfw9.onrender.com"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

// 🔸 OPTIONAL BUT RECOMMENDED: Handle preflight OPTIONS request manually
app.options("*", cors()); // this will respond to OPTIONS before hitting routes

// Middleware
app.use(bodyParser.json());

// ✅ Ping route for UptimeRobot
app.get("/", (req, res) => {
  res.status(200).send("welcome to the api! All systems operational");
});

// ✅ API Routes
app.use("/api/query", queryRoutes);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
