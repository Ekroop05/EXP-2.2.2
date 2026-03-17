import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";   // 👈 ADD THIS

import loggerMiddleware from "./middleware/loggerMiddleware.js";
import authMiddleware from "./middleware/authMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

/* CONNECT DATABASE */
connectDB();   // 👈 THIS WAS MISSING

app.use(express.json());

/* Logging middleware */
app.use(loggerMiddleware);

/* Public route */
app.get("/", (req, res) => {
  res.send("Server Running");
});

/* Protected route */
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed successfully"
  });
});

/* Error test route */
app.get("/error", (req, res) => {
  throw new Error("Test Error");
});

/* Error handling middleware */
app.use(errorMiddleware);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});