'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_MENU_LIST } from '@/constants/list';

const Navigate = () => {
  const location = usePathname();
  const router = useRouter();

  const selectMenu = (path: string) => {
    return path === location
      ? `border-primary border-b-2 text-primary`
      : `border-0 text-disabled`;
  };

  const movePage = (path: string) => {
    router.push(path);
  };

  return (
    <ul className="absolute left-2/4 translate-x-[-50%] flex gap-3 m-auto text-sm font-bold font-oswald">
      {NAV_MENU_LIST.map(({ id, title, path }) => {
        return (
          <li
            key={id}
            className={`${selectMenu(path)} p-2 border-solid cursor-pointer`}
            onClick={() => movePage(path)}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigate;
