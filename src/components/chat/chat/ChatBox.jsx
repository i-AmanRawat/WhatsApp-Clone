import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";

export default function ChatBox() {
  const { person } = useContext(AccountContext);

  return (
    <>
      <ChatHeader person={person} />
      <ChatMessages person={person} />
      {/* <ChatFooter /> */}
    </>
  );
}
