const mongoose = require('mongoose');
const{Schema}= mongoose;

const ratingSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
});

const Rating = mongoose.model('ratings',ratingSchema);

module.exports=Rating;