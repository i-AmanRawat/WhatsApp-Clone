import { useState } from "react";
import { Icon } from "@iconify/react";

export default function MoreVertMenu() {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay(!display);
  }

  return (
    <div className=" -z-0">
      <button className="more-vert-icon-btn flex hover:bg-[#374248] hover:rounded-full items-center mr-5 ">
        <Icon
          onClick={toggleDisplay}
          className="more-vert-icon p-1"
          icon="ic:baseline-more-vert"
          color="#aeb9c1"
          width="35"
          height="35"
        />
      </button>
      <div
        className={`more-vert-content bg-[#233138] text-[#d1d7dc] left-[272px] top-[55px] rounded-md py-5 ${
          display ? "block" : "hidden"
        } absolute `}
      >
        <a
          href="#"
          className="block w-full p-2 tracking-normal hover:bg-[#182229] pr-7 px-8"
        >
          New group
        </a>
        <a
          href="#"
          className="block w-full p-2 tracking-normal hover:bg-[#182229] pr-14 px-8"
        >
          New community
        </a>
        <a
          href="#"
          className="block w-full p-2 tracking-normal hover:bg-[#182229] pr-14 px-8"
        >
          Starred messages
        </a>
        <a
          href="#"
          className="block w-full p-2 tracking-normal hover:bg-[#182229] pr-14 px-8"
        >
          Select chats
        </a>
        <a
          href="#"
          className="block w-full p-2 tracking-normal hover:bg-[#182229] pr-14 px-8"
        >
          Settings
        </a>
        <a
          href="#"
          className="block w-full p-2 tracking-normal hover:bg-[#182229] pr-14 px-8"
        >
          Log out
        </a>
      </div>
    </div>
  );
}
