import ChatFooter from "./ChatFooter";

export default function ChatMessages() {
  return (
    <section className="chat-section">
      <div className="h-[86vh] overflow-y-scroll"></div>
      <ChatFooter />
    </section>
  );
}
