import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import { protectProfile } from "../middleware/auth.js";

router.route("/").post(protectProfile, addOrderItems);
router.route("/:id").get(protectProfile, getOrderById);
export default router;
