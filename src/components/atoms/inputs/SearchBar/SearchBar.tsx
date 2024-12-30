import React from 'react';

import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className="flexCenter px-2 h-40px bg-[#EEEDF2] rounded-md">
      <BiSearchAlt color="gray" />
      <input
        className="p-1 w-[150px] bg-[#EEEDF2] caret-black text-black text-sm focus:outline-none"
        type="text"
        placeholder="검색"
      />
    </div>
  );
};

export default SearchBar;
