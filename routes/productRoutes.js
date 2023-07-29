import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { createProductController } from "../controllers/createProductController.js";
import { getProductController } from "../controllers/getProductController.js";
import {
  brainTreePaymentController,
  braintreeTokenContoller,
  deleteProductController,
  getSingleProductController,
  productFilterController,
  productPhtotController,
  produtCategoryController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/getSingleProductController.js";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//get  products
router.get("/get-product", getProductController);

//get single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/produuct-photo/:pid", productPhtotController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product
router.post("/product-filters", productFilterController);

// search product filter
router.get("/search/:keyword", searchProductController);

//similar product filte
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", produtCategoryController);

//paymet routes
//token
router.get("/braintree/token", braintreeTokenContoller);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);
export default router;
