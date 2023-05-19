const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
});
const signup= new mongoose.model('Signup', contactSchema);
module.exports=signup;