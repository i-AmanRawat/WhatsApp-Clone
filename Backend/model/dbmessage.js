const mongoose = require("mongoose");

//defining schema
const messageSchema = new mongoose.Schema({
 	conversationId:{
		type:String
	},
	senderId:{
		type:String
	},
	receiverId:{
		type:String
	},
	text:{
		type:String
	},
	type:{
		type:String
	}},
	{
		timestamps:true	
	});

//making model
const  message= new mongoose.model("Message", messageSchema);

module.exports = message;
