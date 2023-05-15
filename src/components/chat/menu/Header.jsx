import { emptyProfilePicture } from "../../../constants/data";
import { profilePicture01 } from "../../../constants/data";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="flex bg-[#1f2c33] py-2.5 px-4 items-center">
      <div className="">
        <img
          className="w-10 h-10 rounded-full"
          src={profilePicture01}
          alt="dp"
        />
      </div>
      <div className="flex ml-auto space-x-16">
        <Icon
          className="group-icon"
          icon="ic:baseline-groups"
          color="#aeb9c1"
          width="24"
          height="24"
        />
        <Icon
          className="status-icon"
          icon="pajamas:status"
          color="#aeb9c1"
          width="24"
          height="24"
        />
        <Icon
          className="chat-icon"
          icon="material-symbols:chat"
          color="#aeb9c1"
          width="24"
          height="24"
        />
        <Icon
          className="more-vert-icon"
          icon="ic:baseline-more-vert"
          color="#aeb9c1"
          width="24"
          height="24"
        />
      </div>
    </header>
  );
}
