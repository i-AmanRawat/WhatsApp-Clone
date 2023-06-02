import { createContext, useState } from "react";

export const AccountContext = createContext(null); //we will access user data from AccountContext

export default function AccountProvider({ children }) {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});

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
      value={{ account, setAccount, person, setPerson, titleCase }}
    >
      {children}
    </AccountContext.Provider>
  );
}
