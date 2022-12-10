import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white opacity-60 rounded-full w-[550px] flex py-4 px-4 select-none relative active:opacity-80 focus-within:opacity-100 ease-in duration-300">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent w-full h-full outline-none ml-1"
        type="text"
      />
      {search === "" && (
        <p className="font-serif font-normal absolute pointer-events-none left-5 top-[50%] -translate-y-1/2 text-slate-700">
          Search{" "}
          <span className="italic">
            <b>"Manila, Philippines"</b>
          </span>
        </p>
      )}

      <button className="absolute right-5 top-[50%] -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-slate-700">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
