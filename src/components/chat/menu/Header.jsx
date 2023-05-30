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
      <header className="flex bg-[#1f2c33] py-1 pt-2 px-4 items-center">
        <div className="">
          <button onClick={toggleDrawer}>
            <img
              className="w-10 h-10 rounded-full"
              src={profilePicture01}
              alt="dp"
            />
          </button>
        </div>
        <div className="flex ml-auto space-x-9">
          <button className="group-icon-btn hover:bg-[#374248] hover:rounded-full ">
            <Icon
              className="group-icon p-1"
              icon="ic:baseline-groups"
              color="#aeb9c1"
              width="35"
              height="35"
            />
          </button>
          <button className="status-icon-btn hover:bg-[#374248] hover:rounded-full">
            <Icon
              className="status-icon p-2"
              icon="pajamas:status"
              color="#aeb9c1"
              width="35"
              height="35"
            />
          </button>
          <button className="chat-icon-btn hover:bg-[#374248] hover:rounded-full ">
            <Icon
              className="chat-icon p-2"
              icon="material-symbols:chat"
              color="#aeb9c1"
              width="35"
              height="35"
            />
          </button>
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
