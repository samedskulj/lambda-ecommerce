import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { protectProfile } from "../middleware/auth.js";

router.route("/").post(protectProfile, addOrderItems);
router.route("/myorders").get(protectProfile, getMyOrders);

router.route("/:id").get(protectProfile, getOrderById);
router.route("/:id/pay").put(protectProfile, updateOrderToPaid);
export default router;
