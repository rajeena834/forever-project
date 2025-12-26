import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
 import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoute.js'
//import './config/cloudinary.js' 
//App Config

const app=express()
const port =process.env.PORT || 4000
connectDB()
connectCloudinary()
// Middlewares

app.use(express.json())

//app.use(cors())
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.options("*", cors());
//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/order',orderRouter)
app.use("/api/cart", cartRouter);

app.get('/',(req,res)=>{
    console.log("Api WORKING")
res.send("API working 2.0")
})

app.listen(port, ()=>{
    console.log('server started on PORT : '+ port)
})