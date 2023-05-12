import "./App.css";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

export default function App() {
  return (
    <AccountProvider>
      <Messenger />
    </AccountProvider>
  );
}
