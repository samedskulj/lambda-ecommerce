import express from "express";
const router = express.Router();
import {
  getUserAuth,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protectProfile } from "../middleware/auth.js";

router.route("/login").post(getUserAuth);
router.route("/profile").get(protectProfile, getUserProfile);
router.route("/profile").put(protectProfile, updateUserProfile);

router.route("/").post(registerUser);
export default router;
