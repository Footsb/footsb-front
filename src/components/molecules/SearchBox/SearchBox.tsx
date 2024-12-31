'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Logo } from '@/components/atoms';
import { RiSearchLine, RiCloseCircleLine } from 'react-icons/ri';

const SearchBox = () => {
  const [isFocusSearch, setIsFocusSearch] = useState(false);

  const pathName = usePathname();
  const router = useRouter();

  if (pathName.indexOf('sign') >= 0) return;

  return (
    <div className="flexBetweenCenter sticky top-0 p-2 h-[44px] bg-white shadow-sm z-10 overflow-hidden">
      <Logo />

      <div
        className={`flex items-center gap-2 px-2 py-1  h-[30px] rounded-lg border-[1px] border-solid border-gray translate-x-[${
          isFocusSearch ? '0px' : '100px'
        }] transition-all`}
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
      {/* <div className="flex items-center gap-2">
        {isFocusSearch ? (
          <RiSearchLine
            color="gray"
            onClick={() => {
              setIsFocusSearch((prev) => !prev);
            }}
          />
        ) : (
          <>
            <input
              className="px-2 py-1 w-[150px] text-sm leading-none rounded-lg border-[1px] border-solid border-gray focus:outline-none"
              type="text"
              placeholder="팀 검색"
            />
            <RiCloseCircleLine
              color="gray"
              onClick={() => {
                setIsFocusSearch((prev) => !prev);
              }}
            />
          </>
        )}
      </div> */}
    </div>
  );
};

export default SearchBox;
