'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Logo } from '@/components/atoms';
import { RiSearchLine, RiCloseCircleLine } from 'react-icons/ri';

const SearchBox = () => {
  const [isFocusSearch, setIsFocusSearch] = useState(false);

  const pathName = usePathname();
  // const router = useRouter();

  if (pathName.indexOf('sign') >= 0) return;

  return (
    <div className="flexBetweenCenter sticky top-0 p-2 h-[44px] bg-white shadow-sm z-50 overflow-hidden">
      <Logo />

      <div
        className={`flex items-center gap-2 px-2 py-1  h-[30px] rounded-lg border-[1px] border-solid border-gray ${
          isFocusSearch ? 'translate-x-[0px]' : 'translate-x-[100px]'
        } transition-all`}
      >
        {isFocusSearch ? (
          <RiCloseCircleLine
            color="gray"
            onClick={() => {
              setIsFocusSearch((prev) => !prev);
            }}
          />
        ) : (
          <RiSearchLine
            color="gray"
            onClick={() => {
              setIsFocusSearch((prev) => !prev);
            }}
          />
        )}
        <input
          className="py-1 text-sm w-[80px] leading-none focus:outline-none"
          type="text"
          placeholder="팀 검색"
        />
      </div>
    </div>
  );
};

export default SearchBox;
