const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    customId: {
      type: Number,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    images: {
      type: Map,
      of: String,
      default: {},
    },

    sizes: {
      type: [String],
      default: [],
    },

    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);