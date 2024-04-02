const cartService=require("../services/cartService.js");
const findUserCart=async(req,res)=>{
    const user = req.user;
    try{
        const cart=await cartService.findUserCart(user._id);
        return res.status(200).send(cart);
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
const addItemCart = async(req,res)=>{
    const user=req.user;
    try{
        const cartItem=await cartService.findUserCart(user._id,req.body);
        return res.status(200).send(cartItem);
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
module.exports={
    findUserCart,
    addItemCart,
}