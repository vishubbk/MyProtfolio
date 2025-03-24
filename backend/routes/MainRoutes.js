const express = require("express");
const router = express.Router();
const User = require("../models/MainModel"); // Import User model

// POST - Save a new query
router.post("/", async (req, res) => {
  try {
    const { fullname, email, contact, message } = req.body;

    // Validate fields
    if (!email || !contact ) {
      return res.status(400).json({ error: "Some fields are required" });
    }

    // Save query to database
    const newQuery = new User({ fullname, email, contact, message });
    await newQuery.save();

    res.status(201).json({ success: true, message: "Query submitted successfully Wait for 24hrs" });
  } catch (error) {
    console.error("Error saving query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
