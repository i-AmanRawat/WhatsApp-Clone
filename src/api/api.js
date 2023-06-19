import axios from 'axios';
export const addUser = async (data) => {
	try{
  		await axios.post("http://127.0.0.1:80/signup", data);
          }catch(err){
		console.log("error while adding new user")
	}
};
export const getUser = async () => {
	try{
		const userdata = await axios.get("http://127.0.0.1:80/users");
		return userdata.data;
	}catch(err){
		console.log("error while getting users")
		}
}
export const getConversation = async (data) => {
	try{
		let conversationData = await axios.post("http://127.0.0.1:80/get", data);
		return  conversationData.data;
	   }catch(err){
		console.log("error while getting conversation")
		}
}
export const postMessage = async (data) => { 
	try{
      		let postmsg = await axios.post("http://127.0.0.1:80/msg",data);
	   }catch(err){
		console.log("error while posting messages")
		}
}

export const getMessage = async (id) => {
	try{
		let getmsg= await axios.get(`http://127.0.0.1:80/msg${id}`);
		return getmsg.data;
	    }catch(err){
		console.log("error while getting messages")
		}
}

