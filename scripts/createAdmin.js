/**
 * createAdmin.js
 * Run once to seed an admin user into the database.
 * Usage: node scripts/createAdmin.js
 */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const User = require("../models/User");

const ADMIN_NAME     = "Sree Vastram Admin";
const ADMIN_EMAIL    = "admin@sreevastram.com";
const ADMIN_PASSWORD = "Admin@1234";

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const exists = await User.findOne({ email: ADMIN_EMAIL });
    if (exists) {
      if (!exists.isAdmin) {
        exists.isAdmin = true;
        await exists.save();
        console.log("✅ Existing user updated to admin:", ADMIN_EMAIL);
      } else {
        console.log("ℹ️  Admin user already exists:", ADMIN_EMAIL);
      }
      await mongoose.disconnect();
      return;
    }

    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await User.create({
      name:     ADMIN_NAME,
      email:    ADMIN_EMAIL,
      password: hashed,
      isAdmin:  true,
    });

    console.log("🎉 Admin user created successfully!");
    console.log("   Email   :", ADMIN_EMAIL);
    console.log("   Password:", ADMIN_PASSWORD);
    console.log("   ⚠️  Change the password after first login.");

  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

createAdmin();
