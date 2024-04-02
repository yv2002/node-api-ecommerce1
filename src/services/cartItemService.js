const userService=require("./userService.js");

async function updateCartItem(userId,cartItemId,cartItemDat){
    try{
        const item=await findCartItemById(cartItemData);
            if(!item){
                 throw new Error("cart item not found:",cartItemId)
            }
            const user =await userService.findUserById(item.userId);
            if(!user){
                throw new Error("user not found:",userId)
            }
            if(user._id.toString()===userId.toString()){
                item.quantity=cartItemData.quantity;
                item.price=item.quantity*item.product.price;
                item.discountedPrice=item.quantity*item.product.discountedPrice;
                const updatedCartItem=await item.save();
                return updatedCartItem;
            }
            else{
                throw new Error("you can't update this cart item");
            }
        }catch(error){
                 throw new Error(error.message)
        }
    }

async function removeCartItem(userId,cartItemId){
    const cartItem=await findCartItemById(cartItemId);
    const user=await userService.findUserById(userId);

    if(user._id.toString()===cartItem.userId.toString()){
         await cartItem.findByAndDelete(cartItemId)
    }
    throw new Error("you cant remove another user's items");
}
async function findCartItemById(cartItemId){
    const cartItem=await findCartItemById(cartItemId);
    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("cartitem not found with id",cartItemId)
    }
}

module.EXPORTS={
    updateCartItem,
    removeCartItem,
    findCartItemById
}
