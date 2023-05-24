import axios from "axios";
import {useEffect,useState} from "react";
export default function Conversations() {
	const[users,setUsers]=useState([]);
	useEffect(()=>{
	const fetchData=async()=>{
		try{
    			const res= await axios.get("http://127.0.0.1:5000/users")
			return res.data;
			setUsers(res);
    		 }catch(err){
			console.log(error.message);
			}
	}
	fetchData();
	},[]);
  return <div className="text-white"> </div>;
}
