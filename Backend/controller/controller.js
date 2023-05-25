
const signup=require("../database/db.js");
const bcrypt = require('bcryptjs');
 const adduser=async(req,res)=>{
	const{name,email,password,profilePicture}=req.body;
	console.log("ok") 
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
module.exports=adduser;
const getuser=async(req,res)=>{
 	try{
	 const users=await signup.find({});
	 res.status(200).json(users);
    }catch(error){
    	res.status(400).json(error.message);
	
    }}
module.exports=getuser;

