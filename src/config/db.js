const mongoose = require("mongoose");
const mondbUrl="mongodb+srv://yogita:yogita@cluster0.cqaqt46.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectDb=()=>{
    mongoose.connect(mondbUrl).then(()=>{}).catch()
}
module.exports={connectDb}