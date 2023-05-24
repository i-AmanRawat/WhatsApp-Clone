const express=require("express");
const router=express.Router();
const adduser=require("../controller/controller.js");
const getuser=require("../controller/controller.js");
router.post('/signup',adduser)
router.get('/users',getuser)
module.exports=router;