const orderService=require("../services/orderService.js");

const  getAllOrders=async(req,res)=>{
    try{
        const orders=await orderService.getAllOrder();
        return res.status(200).send(orders);


    }catch(error){
        return res.status(500).send({error:error.message});
    }
}
const confirmedOrder=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}
const shippedOrder=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderService.shippedOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}
const deliverOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}
const cancelledOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}
const deletedOrders=async(req,res)=>{
    const orderId=req.params.orderId;
    try{
        const orders=await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        return res.status(500).send({error:error.message});
    }
}

module.exports={
    getAllOrders,
    confirmedOrder,
    shippedOrder,
    deliverOrders,
    cancelledOrders,
    deletedOrders,

}