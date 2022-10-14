
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
    message:String,
    title:String,
      schedule_date:String,
      time:String,
    user_id:String,
    project_id:String,
        location:String,
 email:String,
    createdAt: {
    type: Date, 
    default: new Date(),
    },
})
var Interview = mongoose.model('Interview', postSchema);
export default Interview;
