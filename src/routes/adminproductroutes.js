const express=require("express")
const router=express.Router();

const productController=require("../controller/productcontroller.js");
const authenticate=require("../middleware/authenticate.js");
const { createProduct, deleteProduct } = require("../services/productService");


router.post("/",authenticate,productController,createProduct);
router.post("/creates",authenticate,productController.createMultipleProducts);
router.delete("/:id",authenticate,productController,deleteProduct);
router.put("/:id",authenticate,productController.updateProduct);


module.exports=router;