import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

export default function ChatDialog() {
  return (
    <div className="chat-window-container flex flex-row h-screen">
      <div className="chat-window left-component bg-[#111b20]">
        <Menu />
      </div>
      <div className="chat-window right-component w-screen bg-white">
        <EmptyChat />
      </div>
    </div>
  );
}
