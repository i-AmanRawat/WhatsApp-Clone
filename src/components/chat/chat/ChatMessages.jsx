import ChatFooter from "./ChatFooter";
import { useContext, useState, useEffect } from "react";
import { getMessage} from  "../../../api/api.js";
import { postMessage} from  "../../../api/api.js";
import axios from "axios";
import { AccountContext } from "../../../context/AccountProvider";
import ChatMessage from "./ChatMessage";
import { data } from "autoprefixer";

export default function ChatMessages({ person, conversation }) {
  const { account,socket } = useContext(AccountContext);
  const [textMsg, setTextMsg] = useState("");
  const [getTextMsg, setGetTextMsg] = useState([]);
  const [incomingmessage] = useState(null);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  useEffect(()=>{
	socket.current.on('getMessage',data=>{
		setIncomingMessage({
			...data,
			createdAt:Date.now()
		})
		})
	},[])

  useEffect(() => {
    const getmessagedetails = async () => {
      let data = await getMessage(conversation._id);
      setGetTextMsg(data);
    }
      getmessagedetails();//conversation._id
  }, [conversation._id,person.id,newMessageFlag]);
 
 useEffect(()=>{
	incomingmessage && conversation?.members?.includes(incomingmessage.senderId)&&
	setMessage(prev=>[...prev,incomingmessage])
	},[incomingmessage,conversation])  

  async function sendText(event) {
    const code = event.keyCode || event.which;
    if (code === 13) {
      let msg = {
        senderId: account.email,
        receiverId: person.email,
        conversationId: conversation._id,
        type: "text",
        text: textMsg,
      };
      await postMessage(msg);
      socket.current.emit('sendMessage',msg);
      setTextMsg("");
      setNewMessageFlag((prev) => !prev);
 
 
    }
  }

  return (
    <section className="chat-section">
      <div className="h-[86vh] overflow-y-scroll">
        {getTextMsg.map((message) => {
          return (
            <div className="px-[70px]">
              <ChatMessage message={message} />;
            </div>
          );
        })}
      </div>
      <ChatFooter
        sendText={sendText}
        textMsg={textMsg}
        setTextMsg={setTextMsg}
      />
    </section>
  );
}
