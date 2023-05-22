//components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

export default function Menu() {
  return (
    <div className="h-full min-w-[510px] ">
      <Header />
      <Search />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
      <Conversations />
    </div>
  );
}
