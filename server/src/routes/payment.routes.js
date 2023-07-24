import express from "express";
import {
  initiatePayment,
  verifyPayment,
} from "../controllers/payement.controller.js";

const router = express.Router();

router.post("/order", initiatePayment);
router.post("/verify", verifyPayment);

export default router;
