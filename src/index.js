import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./database/connect.js";
import authRoutes from "./routes/auth.route.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log("Server listening on PORT " + PORT);
});
