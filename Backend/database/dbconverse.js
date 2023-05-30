const mongoose = require("mongoose");
const converseSchema = new mongoose.Schema({
 	members:{
		type:Array
	},
	message:{
		type:String
	}},
	{
		timestamps:true	
	});
const  converse= new mongoose.model("Converse", converseSchema);
module.exports = converse;
