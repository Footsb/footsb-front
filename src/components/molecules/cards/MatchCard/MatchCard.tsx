import React from 'react';
import { GiGriffinShield } from 'react-icons/gi';
import { IconInfo, Text } from '@/components/atoms/texts';

const MatchCard = () => {
  return (
    <li className="flexCenter flex-col gap-4 px-3 py-5 rounded-md  shadow-card">
      <div className="flex justify-around w-full">
        <IconInfo icon="time">
          <Text value={'2024.12.31 18:00'} type="s_regular" />
        </IconInfo>
        <IconInfo icon="location">
          <Text value={'중랑 구립 구장'} type="s_regular" />
        </IconInfo>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <GiGriffinShield size={36} cursor={'pointer'} color={'#DE3B40'} />
          <Text value="한마음 FC" type="l_bold" />
        </div>
        <Text value="VS" type="m_bold" />
        <div className="flex flex-col items-center gap-2">
          <GiGriffinShield size={36} cursor={'pointer'} color={'#DE3B40'} />
          <Text value="한마음 FC" type="l_bold" />
        </div>
      </div>
    </li>
  );
};

export default MatchCard;
