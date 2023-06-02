import ChatFooter from "./ChatFooter";
import { useContext,useState,useEffect } from "react";
import axios from "axios";
import { AccountContext } from "../../../context/AccountProvider";

export default function ChatMessages({ person, conversation }) {
  const { account } = useContext(AccountContext);
  const [textMsg, setTextMsg] = useState("");
  useEffect(()=>{
	const getmessagedetails=async()=>{		
          const getmessage=async(id)=>{	
	  	let response=await axios.get(`http://127.0.0.1:80/msg${id}`)
	  	return response.data
		}
	  let data=await getmessage(conversation._id);
	  setMessages(data);
		}
	conversation._id && getmessagedetails();
	},[person._id,conversation._id])
  async function sendText(event) {
    const code = event.keyCode||event.which;
    if ((code === 13)){
      let msg = {
        senderId: account.email,
        receiverId: person.email,
        conversationId: conversation._id,
        type: "text",
        text: textMsg,
      };
      let response=await axios.post("http://127.0.0.1:80/msg",msg)
      console.log(msg)
    }
  }

  return (
    <section className="chat-section">
      <div className="h-[86vh] overflow-y-scroll"></div>
      <ChatFooter
        sendText={sendText}
        textMsg={textMsg}
        setTextMsg={setTextMsg}
      />
    </section>
  );
}
