const express =require("express");

const cors =require("cors");

const app= express()



app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node",status:true})
})


const authRouter=require("./routes/authroutes.js")
app.use("/auth",authRouters);


const userRouters=require("./routes/userroutes.js")
app.use("/users",userRouters);

const productRouter=require("./routes/productRoutes.js")
app.use("/products",productRouter);

const adminProductRouter=require("./routes/adminproductroutes.js");
app.use("/admin/prodcuts",adminProductRouter)

const cartRouter=require("./routes/cartRoutes.js");
app.use("/cart",cartRouter);

const cartItemsRouter=require("./routes/cartItemsRoutes.js");
app.use("/cart_items",cartItemsRouter);

const orderRouter= require("./routes/ordersroutes.js");
app.use("/orders",orderRouter);

const adminOrderRouter=require("./routes/adminOrdersroutes.js");
app.use("/admin/orders",adminOrderRouter)


const reviewRouter=require("./routes/reviewRoutes.js");
app.use("/reviews",reviewRouter)

const ratingRouter=require("./routes/ratingRoutes.js");
app.use("/rating",ratingRouter)
  

module.exports=app;