
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
 s_date:String,
  e_date:String,

  contract_amount:String,

    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Award = mongoose.model('Award', postSchema);
export default Award;
