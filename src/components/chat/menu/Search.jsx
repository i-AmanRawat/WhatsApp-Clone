import { Icon } from "@iconify/react";

export default function Search() {
  return (
    <div className="Search-box flex bg-[#1f2c33] mx-4 my-2 rounded-lg items-center">
      <button className="search-icon-btn">
        <Icon
          className="my-2 mx-4"
          icon="ic:baseline-search"
          color="#84969f"
          width="25"
          height="25"
        />
      </button>

      <div className=" w-full overflow-hidden ml-5 mr-5 ">
        <input
          className="w-full bg-[#1f2c33] text-[#d1d7db] "
          type="text"
          placeholder="Search or start new chat"
          //   onChange={handleChange}
          name="find"
          //   value={formData.firstName}
        />
      </div>
    </div>
  );
}
