import React from 'react';

interface Props {
  type: string;
}

const Level = ({ type }: Props) => {
  const levelList: { [key: string]: { title: string; color: string } } = {
    rookie: { title: '루키', color: 'bg-black text-white' },
    bronze: { title: '브론즈', color: 'bg-yellow-900 text-white' },
    silver: { title: '실버', color: 'bg-stone-300 text-black' },
    gold: { title: '골드', color: 'bg-amber-400 text-white' },
    dia: { title: '다이아', color: 'bg-emerald-200 text-black' },
    master: { title: '마스터', color: 'bg-danger text-white' },
  };

  return (
    <div
      className={`${levelList[type].color} py-[2px] px-3 w-fit text-sm font-semibold rounded-full`}
    >
      {levelList[type].title}
    </div>
  );
};

export default Level;
