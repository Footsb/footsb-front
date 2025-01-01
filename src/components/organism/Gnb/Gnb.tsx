'use client';

import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { IoHomeOutline } from 'react-icons/io5';
import { IoIosFootball } from 'react-icons/io';
import { BiFace, BiGroup } from 'react-icons/bi';
import { Text } from '@/components/atoms/texts';

const Gnb = () => {
  const pathName = usePathname();
  const router = useRouter();

  const onClickNav = (path: string) => {
    router.push(`${path}`);
  };

  if (pathName.indexOf('sign') >= 0) return;

  const currentMenu = () => {
    if (pathName === '/') return 'home';
    if (pathName.indexOf('/team') >= 0) return 'team';
    if (pathName.indexOf('/match') >= 0) return 'match';
    return 'profile';
  };

  const iconList: { [key: string]: ReactNode } = {
    home: (
      <IoHomeOutline
        size={24}
        cursor={'pointer'}
        color={currentMenu() === 'home' ? '#4CBB17' : 'black'}
      />
    ),
    team: (
      <BiGroup
        size={24}
        cursor={'pointer'}
        color={currentMenu() === 'team' ? '#4CBB17' : 'black'}
      />
    ),
    match: (
      <IoIosFootball
        size={24}
        cursor={'pointer'}
        color={currentMenu() === 'match' ? '#4CBB17' : 'black'}
      />
    ),
    profile: (
      <BiFace
        size={24}
        cursor={'pointer'}
        color={currentMenu() === 'profile' ? '#4CBB17' : 'black'}
      />
    ),
  };

  return (
    <nav className="fixed bottom-0 py-3 px-2 mx-auto max-w-[390px] min-w-[280px] bg-white border-t-[1px] border-solid border-gray w-full z-50">
      <div className="flex">
        {NAV_LIST.map(({ id, title, name, path, border }) => {
          return (
            <div
              key={id}
              className={`flex flex-col items-center gap-2 w-full ${border}`}
              onClick={() => onClickNav(path)}
            >
              {iconList[name]}
              <Text
                value={title}
                type="m_regular"
                extraStyle={currentMenu() === name ? 'text-primary' : ''}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Gnb;

const NAV_LIST = [
  { id: 1, title: '홈', name: 'home', path: '/' },
  {
    id: 2,
    title: '팀',
    name: 'team',
    path: '/team',
    border: 'border-l-[1px] border-solid border-gray',
  },
  {
    id: 3,
    title: '매치',
    name: 'match',
    path: '/match',
    border: 'border-x-[1px] border-solid border-gray',
  },
  { id: 4, title: '프로필', name: 'profile', path: '/profile' },
];
