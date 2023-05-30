
const signup=require("../database/dbclient.js");
const converse=require("../database/dbconverse.js");
const bcrypt = require('bcryptjs');
exports.adduser=async(req,res)=>{
	const{name,email,password,profilePicture}=req.body;
 	try{
		let userexist=await signup.findOne({email:email});
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

exports.getuser=async(req,res)=>{
 	try{
	 const users=await signup.find({});
	 res.status(200).json(users);
    }catch(error){
    	res.status(400).json(error.message);	
    }
}
exports.add=async(req,res)=>{
 	try{
	 const{senderId,receiverId}=req.body;	
	const exist=await converse.findOne({members:{$all:[receiverId,senderId]}});
	if(exist){
		return res.status(200).json(`conversation already exist`)
	}
	const newConverse=new converse({
		members:[senderId,receiverId]
	})
	await newConverse.save();
	 res.status(200).json(`conversation saved successfully`);
    }catch(error){
    	res.status(400).json(error.message);	
    }
}








