const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
});
contactSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});
const signup = new mongoose.model("Signup", contactSchema);
module.exports = signup;
