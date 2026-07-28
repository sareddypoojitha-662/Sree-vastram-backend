const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("../config/db");
const Product = require("../models/Product");
const products = require("../data/products");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const importData = async () => {
  try {
    await connectDB();

    // Remove existing products
    await Product.deleteMany();

    // Insert new products
    await Product.insertMany(products);

    console.log("✅ Products Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

importData();
