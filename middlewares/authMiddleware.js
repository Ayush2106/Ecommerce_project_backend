import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
//protetcted routes
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// admin acceesss
//if role 0 to custmer and rolw =1 then admin
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id); //login controller me o user banaya hai
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "unauthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "error in admin",
    });
  }
};
