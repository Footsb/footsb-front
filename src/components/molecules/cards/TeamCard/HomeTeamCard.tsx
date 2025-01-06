'use client';

import { useRouter } from 'next/navigation';

import { GiGriffinShield } from 'react-icons/gi';
import { IconInfo, Text } from '@/components/atoms/texts';
import { Category } from '@/components/atoms/tags';

const TeamCard = () => {
  const router = useRouter();

  return (
    <li
      className="flex flex-col justify-between p-3 min-w-[260px] w-full h-[140px] rounded-lg shadow-card"
      onClick={() => {
        router.push('/detail/team/1');
      }}
    >
      <div className="flexBetweenCenter">
        <div className="flex items-center gap-2">
          <GiGriffinShield size={30} cursor={'pointer'} color={'#DE3B40'} />
          <Text value="한마음 FC" type="l_bold" extraStyle="text-right" />
        </div>
        <Category value="축구" type="soccer" />
      </div>
      <div className="flexBetweenCenter">
        <Text
          value="Next Match"
          type="l_bold"
          extraStyle="text-primary font-oswald italic"
        />
        <div className="flex flex-col items-end gap-1">
          <Text value="1.31" type="xl_bold" extraStyle="italic" />
          <IconInfo icon="location">
            <Text value="중랑구립구장" type="s_regular" />
          </IconInfo>
        </div>
      </div>
    </li>
  );
};

export default TeamCard;
