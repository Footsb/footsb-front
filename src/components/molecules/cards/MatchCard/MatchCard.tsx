import React from 'react';
import { GiGriffinShield } from 'react-icons/gi';
import { IconInfo, Text } from '@/components/atoms/texts';

const MatchCard = () => {
  return (
    <li className="flexCenter flex-col gap-4 px-3 py-5 rounded-md">
      <IconInfo icon="location">
        <Text value={'중랑 구립 구장'} type="xs_regular" />
      </IconInfo>
      <div className="grid grid-cols-3 items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <GiGriffinShield size={36} cursor={'pointer'} color={'#DE3B40'} />
          <Text value="한마음 FC" type="m_bold" extraStyle="line-clamp-2" />
        </div>
        <div className="p-2 rounded-lg border-[1px] border-solid border-slate-200">
          <Text value="18:00" type="l_bold" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <GiGriffinShield size={36} cursor={'pointer'} color={'#DE3B40'} />
          <Text value="한마음 FC" type="m_bold" extraStyle="line-clamp-2" />
        </div>
      </div>
    </li>
  );
};

export default MatchCard;
