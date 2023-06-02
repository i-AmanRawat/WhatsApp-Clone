import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
export default function ChatBox() {
  const { account, person } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const getConversation = async (data) => {
        let response = await axios.post("http://127.0.0.1:80/get", data);
        return response.data;
      };
      let data = await getConversation({
        senderId: account.email,
        receiverId: person.email,
      });

      console.log(data);
      setConversation(data);
    };
    getConversationDetails();
  }, [person.email]);

  return (
    <>
      <ChatHeader person={person} />
      <ChatMessages person={person} conversation={conversation} />
      {/* <ChatFooter /> */}
    </>
  );
}
