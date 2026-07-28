const Product = require("../models/Product");

function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeProductName(name) {
    return String(name || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();
}

async function findDuplicateProductName(name, ignoreId = null) {
    const targetName = normalizeProductName(name);
    if (!targetName) return null;

    const products = await Product.find({}).select("_id name");

    return products.find((product) => {
        if (ignoreId && String(product._id) === String(ignoreId)) {
            return false;
        }
        return normalizeProductName(product.name) === targetName;
    }) || null;
}

// ================= ADD PRODUCT =================
const addProduct = async (req, res) => {
    try {

        const { customId, name, category, price, description, image, images, sizes, stock } = req.body;

        const duplicateName = await findDuplicateProductName(name);
        if (duplicateName) {
            return res.status(409).json({
                message: "Product name already exists. Please choose a different title."
            });
        }

        // Auto-generate customId if not provided
        let productId = customId ? parseInt(customId) : null;
        if (!productId) {
            const lastProduct = await Product.findOne({}).sort({ customId: -1 });
            productId = lastProduct ? lastProduct.customId + 1 : 1;
        } else {
            // Check if customId already exists
            const existing = await Product.findOne({ customId: productId });
            if (existing) {
                // Auto-assign a new unique ID
                const lastProduct = await Product.findOne({}).sort({ customId: -1 });
                productId = lastProduct ? lastProduct.customId + 1 : 1;
            }
        }

        const product = await Product.create({
            customId: productId,
            name,
            category,
            price,
            description,
            image,
            images,
            sizes,
            stock,
        });

        res.status(201).json({
            message: "Product Added Successfully",
            product,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
};

// ================= GET ALL PRODUCTS =================
const getProducts = async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category
            ? { category: new RegExp(`^${escapeRegex(category)}$`, "i") }
            : {};
        const products = await Product.find(filter);

        res.status(200).json(products);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error",
        });
    }
};

// ================= GET PRODUCT BY ID =================
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        let product;

        // Check if ID is numeric (customId)
        if (!isNaN(id)) {
            product = await Product.findOne({ customId: Number(id) });
        } else if (id.match(/^[0-9a-fA-F]{24}$/)) {
            // Check if valid ObjectId
            product = await Product.findById(id);
        }

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.status(200).json(product);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error",
        });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const duplicateName = await findDuplicateProductName(req.body.name, req.params.id);
        if (duplicateName) {
            return res.status(409).json({
                message: "Product name already exists. Please choose a different title."
            });
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product Updated Successfully",
            product
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};
// Delete Product
const deleteProduct = async (req, res) => {
    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product Deleted Successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

// ================= EXPORT =================
module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
