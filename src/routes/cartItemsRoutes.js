const express=require("express")
const router =express.Router();

const cartItemRoutes=require("../controller/cartItemController.js");
const authenticate=require("../middleware/authenticate.js");

router.put("../:id",authenticate,cartItemController.updateCartItem);
router.delete("/:id",authenticate,cartItemController.removeCartItem);

module.exports=router;

