import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, updateStatus, userOrders, verifyStipe, verifyRazorpay  } from "../controllers/orderController.js";
import adminAuth from '../middlewares/adminAuth.js';
import authUser from '../middlewares/auth.js';

const orderRouter = express.Router()

// Admin Panel
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status',adminAuth,  updateStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe',authUser,  placeOrderStripe)
orderRouter.post('/razorpay',authUser,  placeOrderRazorpay)


// user Feature
orderRouter.post('/userOrders',authUser, userOrders)

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStipe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)


export default orderRouter