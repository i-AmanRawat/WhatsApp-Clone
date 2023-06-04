import { createContext, useState,useRef,useEffect } from "react";
import {io} from "socket.io-client";
export const AccountContext = createContext(null); //we will access user data from AccountContext

export default function AccountProvider({ children }) {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeusers, setactiveusers] = useState([]);
  const socket=useRef();
  useEffect(()=>{
	socket.current=io('ws://localhost:9000')
	},[])

  function titleCase(inputText) {
    const name = inputText;
    const nameArray = name.split(" ");
    const mappedName = nameArray.map(
      (name) => name.charAt(0).toUpperCase() + name.slice(1)
    );
    return mappedName.join(" ");
  }

  return (
    <AccountContext.Provider
      value={{ account, setAccount, person, setPerson, titleCase , socket , activeusers , setactiveusers  }}
    >
      {children}
    </AccountContext.Provider>
  );
}
