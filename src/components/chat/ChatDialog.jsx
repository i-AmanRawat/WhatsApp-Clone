import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

export default function ChatDialog() {
  const { person } = useContext(AccountContext);

  return (
    <div className="chat-window-container flex flex-row h-screen ">
      <div className="chat-window left-component bg-[#111b20] ">
        <Menu />
      </div>
      <div className="chat-window right-component w-screen bg-white">
        {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
      </div>
    </div>
  );
}
