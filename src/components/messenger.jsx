import { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/chatDialog";
import { AccountContext } from "../context/AccountProvider";

export default function Messenger() {
  const { account } = useContext(AccountContext);
  console.log("account");
  return <>{account ? <ChatDialog /> : <LoginDialog />}</>;
  // return <ChatDialog />;
}
