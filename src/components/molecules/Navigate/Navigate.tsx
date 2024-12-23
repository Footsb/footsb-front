'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_MENU_LIST } from '@/constants/list';

const Navigate = () => {
  const path = usePathname();

  const checkCurMenu = () => {
    if (path.indexOf('detail') >= 0) {
      if (path.indexOf('team') >= 0) return 'HOME';
      if (path.indexOf('match') >= 0) return 'MATCH';
    } else {
      if (path.indexOf('match') >= 0) return 'MATCH';
      if (path.indexOf('my') >= 0) return 'MY';
      return 'HOME';
    }
  };

  const [currentMenu, setCurrentMenu] = useState(() => checkCurMenu());
  const router = useRouter();

  const selectMenu = (title: string) => {
    return title === currentMenu
      ? `border-primary border-b-2 text-primary`
      : `border-0 text-disabled`;
  };

  const movePage = (path: string, title: string) => {
    router.push(path);
    setCurrentMenu(title);
  };

  useEffect(() => {
    if (path) {
      checkCurMenu();
    }
  }, [path]);

  return (
    <ul className="absolute left-2/4 translate-x-[-50%] flex gap-3 m-auto text-sm font-bold font-oswald">
      {NAV_MENU_LIST.map(({ id, title, path }) => {
        return (
          <li
            key={id}
            className={`${selectMenu(title)} p-2 border-solid cursor-pointer`}
            onClick={() => movePage(path, title)}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigate;
