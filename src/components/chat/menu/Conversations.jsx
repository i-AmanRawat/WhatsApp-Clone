import axios from "axios";
import {useEffect,useState} from "react";
export default function Conversations() {
	const[users,setUsers]=useState([]);
	useEffect(()=>{
	const fetchData=async()=>{
		try{
			const resp= await axios.get("http://127.0.0.1:80/users")
			setUsers(resp);
    		 }catch(err){
			console.log(err.message);
			}
	}
	fetchData();
	},[]);
  return <div className="text-white"> </div>;
}
