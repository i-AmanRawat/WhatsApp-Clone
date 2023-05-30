//components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

export default function Menu() {
  return (
    <div className="h-full min-w-[430px] overflow-auto scroll-smooth">
      <Header />
      <Search />
      <Conversations />
    </div>
  );
}
