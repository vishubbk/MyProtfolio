const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true },
  contact: { type: String, required: true, trim: true }, // Changed to String
  message: { type: String, required: true, maxlength: 500 },
});

module.exports = mongoose.model("User", UserSchema);
