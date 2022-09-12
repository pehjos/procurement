
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
    message:String,
  phone:String,
    title:String,

 
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Chart = mongoose.model('Chart', postSchema);
export default Chart;
