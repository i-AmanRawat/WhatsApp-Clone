const express=require("express");
const router=express.Router();
const getuser=require("../controller/controller.js");
router.get('/users',getuser.getuser)
const adduser=require("../controller/controller.js");
router.post('/signup',adduser.adduser)


module.exports=router;