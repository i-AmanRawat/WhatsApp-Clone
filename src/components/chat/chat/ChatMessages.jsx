import ChatFooter from "./ChatFooter";
import { useContext, useState, useEffect } from "react";
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
      const getmessage = async (id) => {
        let response = await axios.get(`http://127.0.0.1:80/msg${id}`);
        return response.data;
      };
      let data = await getmessage(conversation._id);
      setGetTextMsg(data);
	console.log(conversation._id)
    }
	console.log(conversation._id)
     conversation._id && getmessagedetails();//conversation._id
  }, [conversation._id,newMessageFlag]); //,conversation._id newMessageFlag person._id
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
      setTextMsg("");
      setNewMessageFlag((prev) => !prev);
      socket.current.emit('sendMessage',msg);
      let response = await axios.post("http://127.0.0.1:80/msg", msg);
      console.log(msg);
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
