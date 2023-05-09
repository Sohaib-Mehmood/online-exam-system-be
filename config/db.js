const mongoose = require("mongoose");

require("dotenv").config();
// Replace this connection string with your MongoDB connection string
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/online-exams-system-db";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
