
const mongoose = require('mongoose');
const{Schema}= mongoose;

const reviewsSchema = new Schema({
    review:{
        type:String,
          required:true,
    },
    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
});
const Review = mongoose.model('reviews',reviewSchema);

module.exports = Review;