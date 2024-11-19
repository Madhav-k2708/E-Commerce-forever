import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoute.js";
import productRouter from "./routes/productRotue.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());
connectDB()
connectCloudinary()

app.get('/', (req,res)=> {
    res.send("API WORKING")
})

app.use('/api/user', userRoute)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)



app.listen(port, ()=> console.log('Server started on PORT : ',port))
