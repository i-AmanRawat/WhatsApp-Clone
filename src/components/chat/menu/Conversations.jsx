import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

export default function Conversations({ searchInput }) {
  const { account,socket,setactiveusers } = useContext(AccountContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://127.0.0.1:80/users");
        const filteredUsers = resp.data.filter((user) =>
          user.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setUsers(filteredUsers);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [searchInput]);
 useEffect(()=>{
	socket.current.emit('adduser',account)
	socket.current.on('getuser',users=>{
	       setactiveusers(users);
	})
	},[account])
  return (
    <div className="">
      {users.map((user) => {
        return user.email !== account.email && <Conversation user={user} />;
      })}
    </div>
  );
}
