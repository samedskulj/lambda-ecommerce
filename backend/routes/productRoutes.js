import express from "express";
const router = express.Router();
export default router;
import {
  deleteProduct,
  getProductbyId,
  getProducts,
  updateProduct,
  createProduct,
  createProductReview,
} from "../controllers/productController.js";
import { isAdmin, protectProfile } from "../middleware/auth.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route("/").get(getProducts).post(protectProfile, isAdmin, createProduct);
// @desc Fetch single product
// @route GET /api/product/:id
// @access Public

router
  .route("/:id")
  .get(getProductbyId)
  .delete(protectProfile, isAdmin, deleteProduct)
  .put(protectProfile, isAdmin, updateProduct);

router.route("/:id/reviews").post(protectProfile, createProductReview);
