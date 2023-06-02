import { emptyChatImage } from "../../../constants/data";
import { Icon } from "@iconify/react";
import ChatBox from "./ChatBox";

export default function EmptyChat() {
  return (
    <div className="flex w-full h-full border-l-[0.05px] border-gray-600 bg-[#1f2c33] overflow-auto">
      <img
        src={emptyChatImage}
        alt=""
        className="chat-bg-icon w-[200px] h-[200px] m-auto"
      />
    </div>
  );
}
