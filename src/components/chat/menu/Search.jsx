import { Icon } from "@iconify/react";
import { useState, useRef } from "react";

export default function Search({ searchInput, setSearchInput }) {
  const [toggleButton, setToggleButton] = useState(false);
  const inputRef = useRef(null);

  function handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    setSearchInput(event.target.value);
  }
  function handleInputClick() {
    setToggleButton((prev) => !prev);
  }

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div className="Search-box flex bg-[#1f2c33] mx-4 my-2 rounded-lg items-center">
      <div className="">
        <button className="search-icon-btn" onClick={focusInput}>
          <Icon
            className={`my-2 mx-4  ${toggleButton ? "hidden" : "inline"}`}
            icon="ic:baseline-search"
            color="#84969f"
            width="25"
            height="25"
          />
        </button>
        <button className="back-button" onClick={handleInputClick}>
          <Icon
            className={`my-2 mx-4  ${toggleButton ? "inline" : "hidden"}`}
            icon="ion:arrow-back-outline"
            color="#8696a0"
            width="25"
            height="25"
          />
        </button>
      </div>

      <div
        className=" w-full overflow-hidden ml-5 mr-5 "
        onFocus={handleInputClick}
        onBlur={handleInputClick}
      >
        <input
          ref={inputRef}
          className="w-full bg-[#1f2c33] text-[#d1d7db] "
          type="text"
          placeholder="Search or start new chat"
          onChange={handleChange}
          name="search-box"
          value={searchInput}
        />
      </div>
    </div>
  );
}
