const express = require("express");
const router = express.Router();

const {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

// Add Product
router.post("/", addProduct);

// Get All Products
router.get("/", getProducts);

// Get Product By ID
router.get("/test/:id", getProductById);
router.get("/:id", getProductById);

// Update Product
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
