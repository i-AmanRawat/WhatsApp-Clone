const express=require("express");
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("hello")
})
router.post('/signup', async(req , res)=>{
    const{name,email}=req.body;
 	try{
		console.log("ok")
                const con = new signup({ name,email});
		const cont= await con.save();
		console.log(con)
            	res.status(200);
        
    }catch(error){
    	console.log(error)
    }
})
module.exports=router;