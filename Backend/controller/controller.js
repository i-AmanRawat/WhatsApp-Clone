
const signup=require("../database/db.js");
const bcrypt = require('bcryptjs');
exports.adduser=async(req,res)=>{
	console.log("ok") 
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
    }}

exports.getuser=async(req,res)=>{
 	try{
	 const users=await signup.find({});
	 res.status(200).json(users);
    }catch(error){
    	res.status(400).json(error.message);
	
    }}






