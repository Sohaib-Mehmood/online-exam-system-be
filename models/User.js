const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Teacher", "Student"],
    required: true,
  },
  profilePicture: {
    type: String,
  },
  fullName: {
    type: String,
  },
});

module.exports = User = mongoose.model("User", userSchema);
