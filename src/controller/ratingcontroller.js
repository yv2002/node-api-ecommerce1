const ratingService=require("../services/ratingService")


const createRating= async(res,req)=>{
    const user=req.user;
    try{
        const rating =await ratingService.createRating(req.body,user);
        return res.status(201).send(review);
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}


const getAllRating= async(res,req)=>{
    const productId=req.params.productId;
    const user=req.user;

    try{
        const reviews=await ratingService.getAllRating(productId);
        return res.status(201).send(reviews);
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

module.exports={
    createRating,
    getAllRating,
}