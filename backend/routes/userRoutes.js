import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// Routes for User Authentication and Registration
router.post("/", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);

// Routes for User Profile
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Routes for Admin
router.get("/", protect, admin, getUsers);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;

// router.route("/").post(registerUser).get(getUsers);
// router.post("/logout", logoutUser);
// router.post("/login", authUser);
// router.route("/profile").get(getUserProfile).put(updateUserProfile);
// router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);
