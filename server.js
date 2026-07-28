const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// Load environment variables
dotenv.config({ path: path.join(__dirname, ".env") });

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static assets from frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Authentication Routes
app.use("/api/auth", authRoutes);

// Product Routes
app.use("/api/products", productRoutes);

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
