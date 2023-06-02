import formatDate from "../../../utils/commonjs-utils";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

export default function ChatMessage({ message }) {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.email === message.senderId ? (
        <div className="flex bg-[#015c4b] max-w-[60%] rounded-lg ml-auto p-1 w-fit break-normal ">
          <h4 className="sender-msg  text-[#dee6e7] pr-[25px] pl-[5px]">
            {message.text}
          </h4>
          <span className="sender-msg-time text-[#a3beb7] break-keep mt-auto">
            {formatDate(message.createdAt)}
          </span>
        </div>
      ) : (
        <div className="flex bg-[#1f2c33] max-w-[60%] rounded-lg mr-auto p-1 w-fit break-normal ">
          <h4 className="sender-msg  text-[#dee6e7] pr-[25px] pl-[5px]">
            {message.text}
          </h4>
          <span className="sender-msg-time text-[#a3beb7] break-keep mt-[10px]">
            {formatDate(message.createdAt)}
          </span>
        </div>
      )}
    </>
  );
}
