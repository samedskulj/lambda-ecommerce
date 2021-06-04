import Product from "../models/productModel.js";
import asnycHandler from "express-async-handler";
// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asnycHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
// @desc Fetch single product
// @route GET /api/product/:id
// @access Public
const getProductbyId = asnycHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductbyId };
