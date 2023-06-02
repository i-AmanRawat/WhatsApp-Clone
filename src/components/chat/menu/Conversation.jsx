import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";
import  axios from "axios";
export default function Conversation({ user }) {
  const { account, setPerson, titleCase } = useContext(AccountContext);

  const getUser = async () => {
    setPerson(user);
    let data=({senderId:account.email,receiverId:user.email})
    const res = await axios.post("http://127.0.0.1:80/add",data)
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
