import { Icon } from "@iconify/react";
import{useState}from "react";
export default function ChatFooter({ textMsg, setTextMsg, sendText }) {
  return (
    <div className="chat-footer w-auto ">
      <footer className="flex items-center bg-[#1f2c33] py-1 px-6 h-[57px] ">
        <div className="flex space-x-4 ">
          <button className=" hover:bg-[#374248] hover:rounded-full ">
            <Icon
              icon="cil:smile"
              color="#8696a0"
              width="35"
              height="35"
              className="p-1"
            />
          </button>
          <button className="rotate-45  hover:bg-[#374248] hover:rounded-full ">
            <Icon
              icon="ic:twotone-attachment"
              color="#8696a0"
              rotate={3}
              vFlip={true}
              width="35"
              height="35"
              className="p-1"
            />
          </button>
        </div>
        <div className="text-box w-full mx-3 ">
          <input
            type="text"
            placeholder="Type a message"
            className="line-height rounded-lg bg-[#2a3942] w-full px-6 text-base text-[#d1d7db]"
            value={textMsg}
            onChange={(e) => setTextMsg(e.target.value)}
            onKeyPress={(e) => sendText(e)}
          />
        </div>
        <div className="ml-auto pt-1 pl-3  ">
          <button className=" hover:bg-[#374248] hover:rounded-full ">
            <Icon
              icon="ic:baseline-mic"
              color="#8696a0"
              width="35"
              height="35"
              className="p-1"
            />
          </button>
        </div>
      </footer>
    </div>
  );
}
