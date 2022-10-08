
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    name:String ,
    description:String,
    image:String,
    date:String,
    closedate:String,
    project_no:String,
    bid_price:String,
    source_fund:String,
    no_slot:String,
    region:String,
    telephone:String,
    email:String,
    project_type:String,
    status:String,
createdAt: {
type: Date,
default: new Date(),
},
})
var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
