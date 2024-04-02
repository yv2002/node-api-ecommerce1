const Rating =require("../models/rating.model.js");
const productService=require("../services/productService.js");

async function createRating(req,user){
    const product=await productService.findProductByID(req.productId);

    const rating = new Rating({
        product:product._id,
        user:user._id,
        rating:req.rating,
        createdAt:new Date()
    })
    return await rating.save();
}
async function getProductRating(productId){
    return await Rating.find({product:productId});
}

module.exports={
    createRating,
    getProductRating
}