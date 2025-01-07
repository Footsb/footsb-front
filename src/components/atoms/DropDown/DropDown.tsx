'use client';

import { useState } from 'react';
import { Text } from '@_components/atoms/texts';
import { TbCaretDownFilled } from 'react-icons/tb';

interface Props {
  defaultTitle: string;
}

const DropDown = ({ defaultTitle }: Props) => {
  const [clickDrop, setClickDrop] = useState(false);

  return (
    <div
      className="flexBetweenCenter relative w-24 py-1 px-2 border-[1px] border-solid border-gray rounded-sm"
      onClick={() => setClickDrop((prev) => !prev)}
    >
      <Text value={defaultTitle} type="s_regular" />
      <div
        className={`${clickDrop ? 'rotate-0' : 'rotate-180'} transition-all`}
      >
        <TbCaretDownFilled />
      </div>
      {clickDrop && (
        <div
          className="flex flex-col gap-3 absolute left-[-1px] right-[-1px] top-[30px] p-2 bg-white border-[1px] border-solid border-gray rounded-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {LOCATION_LIST.map((list) => {
            return <Text value={list} type="s_regular" key={list} />;
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;

const LOCATION_LIST = ['서울', '경기'];
