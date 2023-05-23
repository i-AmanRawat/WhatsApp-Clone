import { Icon } from "@iconify/react";
import MyProfile from "./MyProfile";

export default function ProfileInfoDrawer({ open, setOpen, display }) {
  return (
    <>
      <div className={`h-full bg-[#111b20] absolute top-0 z-20 ${display}`}>
        <header className="bg-[#1f2c33] text-[#d9dee0] flex space-x-8 pt-24 pl-8 pb-5 text-2xl leading-none font-normal">
          <button
            className="back-button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Icon
              icon="ion:arrow-back"
              color="#d9dee0"
              width="24"
              height="24"
            />
          </button>
          <h3 className="profile">Profile</h3>
        </header>
        <MyProfile />
      </div>
    </>
  );
}
