import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategorycontroller,
  getAllcategoryController,
  getsinglecategory,
  deletecategoryController,
} from "../controllers/createCategoryController.js";

const router = express.Router();
//routes
router.post(
  "/create-category/:id",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategorycontroller
);
//get all categories
router.get("/get-category", getAllcategoryController);

//get single category
router.get("/getSingle-category/:slug", getsinglecategory);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deletecategoryController
);

export default router;
