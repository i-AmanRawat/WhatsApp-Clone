const mongoose = require("mongoose");

//defining schema
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

//making model
const  converse= new mongoose.model("Converse", converseSchema);

module.exports = converse;
