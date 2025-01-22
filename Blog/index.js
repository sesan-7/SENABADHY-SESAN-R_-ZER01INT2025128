import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./DataBase/MongoConnector.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import RouteConfig from "./Routes/RouteConfig.js";

// Load environment variables
dotenv.config();

// Create an Express app instance
const app = express();

// Middlewares
app.use(helmet())
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests only from localhost:5000
    credentials: true, // Allow cookies to be sent and received
  })
); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies from requests

// Routes
app.use("/server", RouteConfig);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Zer01 version 1.1.25" });
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Not Found Route Handling
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Database connection and server start
const startServer = async () => {
  const PORT = process.env.PORT || 5000; // Default to port 5000 if not set
  try {
    await connectDB(); // Ensure DB connection happens before processing requests
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

// Start the server
startServer();