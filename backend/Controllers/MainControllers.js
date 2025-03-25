const express = require("express");
const User = require("../models/MainModel");

const router = express.Router();

// ✅ Create Query API (POST)
router.post("/", async (req, res) => {
  try {
    const { fullname, email, contact, message } = req.body;

    if (!fullname || !email || !contact) {
      return res.status(400).json({ message: "Some fields are required" });
    }

    const newUser = new User({ fullname, email, contact, message });
    await newUser.save(); // Consider `insertMany` if batching requests

    res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    console.error("Query Submission Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
