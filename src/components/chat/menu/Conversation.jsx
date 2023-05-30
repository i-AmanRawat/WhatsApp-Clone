import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";

export default function Conversation({ user }) {
  const { account, setPerson } = useContext(AccountContext);

  function getUser() {
    setPerson(user);
  }

  return (
    <div className="flex py-3 cursor-pointer" onClick={getUser}>
      <div className="">
        <img
          src={user.profilePicture}
          alt="dp"
          className="profile-picture w-14 rounded-full mx-4"
        />
      </div>
      <div>
        <h3 className="user-name text-[#e9edef] text-center mt-2 ">
          {user.name}
        </h3>
      </div>
    </div>
  );
}
