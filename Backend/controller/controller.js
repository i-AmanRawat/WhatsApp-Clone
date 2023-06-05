//requiring databases
const signup=require("../model/dbclient.js");
const converse=require("../model/dbconverse.js");
const message=require("../model/dbmessage.js");
//hashing
const bcrypt = require('bcryptjs');

//adding new users
exports.adduser=async(req,res)=>{
	const{name,email,password,profilePicture}=req.body;
 	try{
		let userexist=await signup.findOne({email:email});
		userexist=await bcrypt.compare(password,userexist.password);
		if(userexist){
			res.status(200).json({message:"user already exist"})	
		}else{const con = new signup({ name,email,password,profilePicture});
				  const cont= await con.save();
		      		   console.log(con)
            	     		   res.status(200).json({message:"new user"});}
    }catch(error){
    	res.status(400).json(error.message);
    }
}

//getting all users in our contacts
exports.getuser=async(req,res)=>{
 	try{
	 const users=await signup.find({});
	 return res.status(200).json(users);
    }catch(error){
    	res.status(400).json(error.message);	
    }
}
/*exports.addconversation=async(req,res)=>{
 	try{
	 const{senderId,receiverId}=req.body;	
	const exist=await converse.findOne({members:{$all:[senderId,receiverId]}});
	if(exist){
		return res.status(200).json(`conversation already exist`)
	}
	const newConverse= new converse({
		members:[senderId,receiverId]
	})
	await newConverse.save();
	 res.status(200).json(`conversation saved successfully`);
    }catch(error){
    	res.status(400).json(error.message);	
    }
}*/

//checking conversation and getting it
exports.getconversation=async(req,res)=>{
 	try{
	const{senderId,receiverId}=req.body;	
	const conversation=await converse.findOne({members:{$all:[senderId,receiverId]}});
	if(conversation){
	return res.status(200).json(conversation)}
	else{
		const Conversation= new converse({
		members:[senderId,receiverId]})
		await Conversation.save();
		return res.status(200).json(Conversation)
	}
    }catch(error){
    	res.status(400).json(error.message);	
    }
}

//posting new messages
exports.newmessage=async(req,res)=>{
 	try{
	const newmessage=new message(req.body)
	let save=await newmessage.save();
	console.log(save)
	await converse.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
	return res.status(200).json("Message sent")

    }catch(error){
    	res.status(400).json(error.message);	
    }
}

//getting posted messages
exports.getmessage=async(req,res)=>{
 	try{
	let Message=await message.find({conversationId:req.params.id})
	 return res.status(200).json(Message)
    }catch(error){
    	res.status(400).json(error.message);	
    }
}