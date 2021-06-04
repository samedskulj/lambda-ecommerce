import express from "express";
const router = express.Router();
import { getUserAuth, getUserProfile } from "../controllers/userController.js";
import { protectProfile } from "../middleware/auth.js";

router.route("/login").post(getUserAuth);
router.route("/profile").get(protectProfile, getUserProfile);
export default router;
