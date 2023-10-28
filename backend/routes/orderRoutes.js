import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDeliver,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Define your order routes
router.route("/").post(protect, addOrderItems); // Create a new order
router.get("/myOrders", protect, getMyOrders); // Get logged-in user's orders
router.put("/:id/pay", protect, updateOrderToPaid); // Update order to paid
router.route("/:id").get(protect, getOrderById); // Get order by ID

// Admin
router.route("/").get(protect, admin, getOrders); // Get all orders (Admin)
router.put("/:id/deliver", protect, admin, updateOrderToDeliver); // Update order to delivered

export default router;
