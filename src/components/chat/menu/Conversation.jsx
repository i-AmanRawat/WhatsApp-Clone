import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";
export default function Conversation({ user }) {
  const { account, setPerson, titleCase } = useContext(AccountContext);

  const getUser = async () => {
    setPerson(user);
    const res = await fetch("http://127.0.0.1:80/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ senderId: account.email, receiverId: user.email }),
    });
  };

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
          {titleCase(user.name)}
        </h3>
      </div>
    </div>
  );
}
