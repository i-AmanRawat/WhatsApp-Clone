import ChatFooter from "./ChatFooter";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

export default function ChatMessages({ person, conversation }) {
  const { account } = useContext(AccountContext);
  const [textMsg, setTextMsg] = useState("");

  function sendText(event) {
    const code = event.key;
    if ((code = "enter")) {
      let msg = {
        senderId: account.email,
        receiverId: person.email,
        conversationId: conversation._id,
        type: "text",
        text: textMsg,
      };
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
