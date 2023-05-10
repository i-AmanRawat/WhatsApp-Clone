import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import LoginDialog from "./components/account/LoginDialog";

export default function App() {
  const clientId = "";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LoginDialog />
    </GoogleOAuthProvider>
  );
}
