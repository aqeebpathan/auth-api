import { Router } from "express";
import {
  login,
  signup,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuthStatus,
} from "../controllers/auth.controller.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/status", verifyToken, checkAuthStatus);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
