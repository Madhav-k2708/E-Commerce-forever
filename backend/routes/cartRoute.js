import express from "express";
import {
  addToCart,
  updateCartItem,
  getUserCart,
} from "../controllers/cartController.js";
import authUser from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/get",authUser, getUserCart);
cartRouter.post("/add",authUser, addToCart);
cartRouter.post("/update",authUser, updateCartItem);

export default cartRouter;
