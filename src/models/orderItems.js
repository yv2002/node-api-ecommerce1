const mongoose = require('mongoose');
const{Schema} = mongoose;

const orderItemSchema = new Schema({

 product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
},
    size:{
        type:String,
    },
quantity:{
    type:Number,
    required:true,
},
price:{
    type:Number,
    required:true,
},
discountedPrice:{
    type:Number,
    required:true,
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:true,
},

});


const OrderItems = mongoose.model('orderItems',orderItemSchema);
module.exports = OrderItems;