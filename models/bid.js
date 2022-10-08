
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  project_id:String,
  user_id:String,
  project_title:String,
  project_description:String,
  project_agency:String,
    name: String,
   expected_payment: String,
     title: String,
     description: String,
 start_date: String,
status: String,
      contact: String,
  complete_date: String,
     category: String,
     hrs_perweek: String,
   total_workers: String,
   nationality: String,
   adress: String,
   district: String,
   region: String,
   cv: String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
 
})
var Bid = mongoose.model('Bid', postSchema);
export default Bid;
