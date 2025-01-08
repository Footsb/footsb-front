'use client';

import { MouseEvent, useState } from 'react';
import { Text } from '@_components/atoms/texts';
import { TbCaretDownFilled } from 'react-icons/tb';

interface Props {
  idx: number;
  list: string[];
  placeholder: string;
  selectValue: string;
  disabled?: boolean;
  onSelect: (idx: number, value: string) => void;
}

const DropDown = ({
  idx,
  list,
  placeholder,
  selectValue,
  disabled = false,
  onSelect,
}: Props) => {
  const [clickDrop, setClickDrop] = useState(false);

  const onClickDropDown = () => {
    if (!disabled) {
      setClickDrop((prev) => !prev);
    }
  };

  const onSelectItem = (e: MouseEvent<HTMLDivElement>, value: string) => {
    e.stopPropagation();
    onSelect(idx, value);
    onClickDropDown();
  };

  return (
    <div
      className="flexBetweenCenter relative w-24 py-1 px-2 border-[1px] border-solid border-gray rounded-sm"
      onClick={onClickDropDown}
    >
      <Text
        value={selectValue || placeholder}
        type="s_regular"
        extraStyle={`${disabled ? 'text-gray' : ''}`}
      />
      <div
        className={`${clickDrop ? 'rotate-0' : 'rotate-180'} transition-all`}
      >
        <TbCaretDownFilled color={`${disabled ? 'gray' : ''}`} />
      </div>
      {clickDrop && (
        <div className="flex flex-col gap-3 absolute left-[-1px] right-[-1px] top-[30px] p-2 max-h-[150px] overflow-scroll bg-white border-[1px] border-solid border-gray rounded-sm">
          {list.map((list) => {
            return (
              <div key={list} onClick={(e) => onSelectItem(e, list)}>
                <Text value={list} type="s_regular" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
