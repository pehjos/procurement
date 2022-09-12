
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
   
    name:String,
   email:String,
    phone:String,
    message:String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Order = mongoose.model('Order', postSchema);
export default Order;
