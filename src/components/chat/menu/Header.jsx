import { emptyProfilePicture } from "../../../constants/data";
import { profilePicture01 } from "../../../constants/data";
import { Icon } from "@iconify/react";
import MoreVertMenu from "./MoreVertMenu";
import ProfileInfoDrawer from "../../drawer/ProfileInfoDrawer";
import { useState } from "react";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <div className="relative">
      <header className="flex bg-[#1f2c33] py-2.5 px-4 items-center">
        <div className="">
          <button onClick={toggleDrawer}>
            <img
              className="w-10 h-10 rounded-full"
              src={profilePicture01}
              alt="dp"
            />
          </button>
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
          <MoreVertMenu />
        </div>
      </header>
      <ProfileInfoDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        display={`${openDrawer ? "block" : "hidden"}`}
      />
    </div>
  );
}
