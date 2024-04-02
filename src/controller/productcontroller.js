const productService=require("../services/productService.js");
const createProduct=async(req,res)=>{
    const productId =req.params.id;
try{
    const product=await productService.createProduct(user,req.body);
    return res.status(201).send(product);
}catch(error){
    return res.status(500).send({error:error.message})
}
}

const deleteProduct=async(req,res)=>{
    const productId =req.params.id;
try{
    const product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
}catch(error){
    return res.status(500).send({error:error.message})
}
}
const updateProduct=async(req,res)=>{
    const productId =req.params.id;
try{
    const product = await productService.updateProduct(productId,req.body);
    return res.status(201).send(product);
}catch(error){
    return res.status(500).send({error:error.message})
}
}
const findProductByID=async(req,res)=>{
    const productId =req.params.id;
try{
    const product = await productService.findProductByID(productId);
    return res.status(201).send(product);
}catch(error){
    return res.status(500).send({error:error.message})
}
}
const findProduct=async(req,res)=>{
    const productId =req.params.id;
try{
    const product = await productService.findProduct(productId);
    return res.status(201).send(product);
}catch(error){
    return res.status(500).send({error:error.message})
}
}
const getAllProducts=async(req,res)=>{
    const productId =req.params.id;
try{
    const product = await productService.getAllProducts(req.query);
    return res.status(201).send(products);
}catch(error){
    return res.status(500).send({error:error.message});
}
}
const createMultipleProducts=async(req,res)=>{
    const productId =req.params.id;
try{
    const product = await productService.createMultipleProduct(req.body);
    return res.status(201).send({message:"Products created Successfully"});
}catch(error){
    return res.status(500).send({error:error.message});
}
}
module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    createMultipleProducts,
}
