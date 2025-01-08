import { ReactNode } from 'react';

import { IoLocationOutline } from 'react-icons/io5';
import { Text } from '@/components/atoms/texts';
import { SubTitleBox } from '@/components/molecules';

const SearchTeam = () => {
  const iconComponents: { [key: string]: ReactNode } = {
    location: <IoLocationOutline size={24} />,
    // time: <IoTimeOutline />,
    // people: <IoPeopleOutline />,
    // info: <TbInfoTriangle />,
  };

  return (
    <section className="p-4">
      <SubTitleBox title="팀 찾기" />
      <ul className="grid grid-cols-2 gap-4 py-4 flex-wrap">
        {[1, 2, 3, 4].map((el) => {
          return (
            <li
              className="flex flex-col items-center gap-6 p-3 w-full rounded-md bg-orange-400 shadow-sm"
              key={el}
            >
              <div className="p-2 bg-white rounded-full">
                {iconComponents.location}
              </div>
              <Text value="내 위치 기반" type="m_bold" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SearchTeam;
