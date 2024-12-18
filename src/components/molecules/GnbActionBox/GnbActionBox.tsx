import React from 'react';

import { BiBell, BiFootball } from 'react-icons/bi';
import { SearchBar } from '@/components/atoms/inputs';

const GnbActionBox = () => {
  return (
    <div className="flex items-center gap-2">
      <SearchBar />
      <BiBell size={22} />
      <BiFootball size={22} className="cursor-pointer" />
    </div>
  );
};

export default GnbActionBox;
