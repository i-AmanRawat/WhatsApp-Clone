//components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import { useState } from "react";

export default function Menu() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="h-full min-w-[430px] overflow-auto scroll-smooth">
      <Header />
      <Search setSearchInput={setSearchInput} searchInput={searchInput} />
      <Conversations searchInput={searchInput} />
    </div>
  );
}
