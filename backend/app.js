require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// ✅ Allowed Origins (Frontend Domains)
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
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ Allow Methods
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow Headers
  })
);

// ✅ Handle Preflight Requests (OPTIONS)
app.options("*", cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

// ✅ Donation API
app.post("/api/donate", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Valid amount is required" });
    }

    const paymentOptions = {
      amount: parseInt(amount) * 100, // Convert to paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(paymentOptions);

    res.json({ orderId: order.id, amount: order.amount, key: process.env.RAZORPAY_KEY });
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
