import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

export default function Conversations() {
  const { account } = useContext(AccountContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://127.0.0.1:80/users");
        setUsers(resp.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      {users.map((user) => {
        return user.email !== account.email && <Conversation user={user} />;
      })}
    </div>
  );
}
