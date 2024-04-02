const reviewService=require("../services/reviewService")


const createReview= async(res,req)=>{
    const user=req.user;
    try{
        const review=await reviewService.createReview(req.body,user);
        return res.status(201).send(review);
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}


const getAllReview= async(res,req)=>{
    const productId=req.params.productId;
    const user=req.user;

    try{
        const reviews=await reviewService.getAllReview(productId);
        return res.status(201).send(reviews);
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
module.exports={
    createReview,
    getAllReview,
}
