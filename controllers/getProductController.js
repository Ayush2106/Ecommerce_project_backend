import productModel from "../models/productModel.js";
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      countTotal: products.length,
      message: "All Peoducts",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in getting products",
      error,
    });
  }
};
