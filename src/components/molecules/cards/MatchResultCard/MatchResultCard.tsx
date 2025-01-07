import { Text } from '@/components/atoms/texts';
import React from 'react';
import { GiGriffinShield } from 'react-icons/gi';

interface Props {
  result: string;
}

const MatchResultCard = ({ result }: Props) => {
  const cardData: { [key: string]: { style: string; title: string } } = {
    win: { style: 'bg-primary', title: 'WIN' },
    draw: { style: 'bg-gray', title: 'DRAW' },
    lose: { style: 'bg-danger', title: 'LOSE' },
  };

  return (
    <div className="flex flex-col items-center gap-3 py-3 rounded-sm shadow-card">
      <div className="flex gap-3 px-3">
        <div className="flexCenter flex-col gap-2">
          <div className="p-1 border-[1px] border-solid border-slate-200 rounded-xl">
            <GiGriffinShield size={24} color={'#DE3B40'} />
          </div>
          <Text value="5" type="l_bold" />
        </div>
        <div className="flexCenter flex-col gap-2">
          <div className="p-1 border-[1px] border-solid border-slate-200 rounded-xl">
            <GiGriffinShield size={24} color={'#DE3B40'} />
          </div>
          <Text value="3" type="l_bold" />
        </div>
      </div>
      <div
        className={`${cardData[result].style} py-1 w-full text-center text-white`}
      >
        <Text value={cardData[result].title} type="m_bold" />
      </div>
    </div>
  );
};

export default MatchResultCard;
