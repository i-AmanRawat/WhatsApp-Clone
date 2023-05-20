const express=require("express");
const saltRounds = 10
const router=express.Router();
const adduser=require("../controller/controller.js");
router.post('/signup',adduser)
module.exports=router;