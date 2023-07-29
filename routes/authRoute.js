import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswrodController,
  updateProfileController,
  getOrdersController,
  getAllOrderController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//register || method post
router.post("/register", registerController);

// login||post
router.post("/login", loginController);
// forgo password route ||postt
router.post("/forgotPassword", forgotPasswrodController);
//test route
router.get("/test", requireSignIn, isAdmin, testController);
//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protetecetd admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all order
router.get("/all-orders", requireSignIn, isAdmin, getAllOrderController);

//status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
