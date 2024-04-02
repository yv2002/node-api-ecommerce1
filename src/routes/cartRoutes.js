const express=require("express")
const router =express.Router();

const cartController=require("../controller/cartController.js");
const authenticate =require("../add",authenticate,cartController.addItemCart);
router.get("/",authenticate,cartController.findUserCart);
router.put("/add",authenticate,cartController.addItemCart);

module.exports=router;