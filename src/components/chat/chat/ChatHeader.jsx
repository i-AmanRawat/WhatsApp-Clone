import { emptyProfilePicture } from "../../../constants/data";
import { Icon } from "@iconify/react";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";

export default function ChatHeader({ person }) {
  const { titleCase } = useContext(AccountContext);

  return (
    <div className="chat-header ">
      <header className="flex bg-[#1f2c33]  py-1 pt-2 px-4 items-center">
        <div className="">
          <button className="">
            <img
              src={person.profilePicture}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </button>
        </div>
        <div className="user-name text-[#e8ecee] pl-5 pb-1">
          <h3 className=" font-medium">{titleCase(person.name)}</h3>
        </div>
        <div className="flex ml-auto space-x-5 ">
          <div className="search-icon">
            <button className=" hover:bg-[#374248] hover:rounded-full ">
              <Icon
                icon="ic:baseline-search"
                color="#aebac1"
                width="35"
                height="35"
                className="p-1"
              />
            </button>
          </div>
          <div className="more-vert-icon">
            <button className=" hover:bg-[#374248] hover:rounded-full ">
              <Icon
                icon="ic:baseline-more-vert"
                color="#aeb9c1"
                width="35"
                height="35"
                className="p-1"
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
