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
app.use(cors())
// app.use(
//   cors({
//     origin: [
    
// "https://vercel.com/rajeenas-projects/forever-frontend5" ,
// "https://vercel.com/rajeenas-projects/forever-admin1"
//    ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
//   })
// );

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/order',orderRouter)
app.use("/api/cart", cartRouter);

app.get('/',(req,res)=>{
res.send("API working")
})

app.listen(port, ()=>{
    console.log('server started on PORT : '+ port)
})