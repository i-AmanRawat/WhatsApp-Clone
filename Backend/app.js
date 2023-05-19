// importing package
const { json } = require('body-parser');
const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors())
app.use(express.json());
// connectiong database
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb+srv://pranjalrana:pranjalrana@cluster1.vxthoqp.mongodb.net/?retryWrites=true&w=majority ');
    console.log("connected")
}
const signup=require('./database/db');
app.use(require("./routes/router"));
// listening
app.listen(5000,()=>{
    console.log(`server running ${5000} `)
})
