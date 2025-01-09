'use client';

import { MouseEvent } from 'react';
import { Text } from '@_components/atoms/texts';
import { TbCaretDownFilled } from 'react-icons/tb';

interface Props {
  name: string;
  list: string[];
  placeholder: string;
  selectValue: string;
  disabled?: boolean;
  curDropDown: string;
  handleDropDown: (state: string) => void;
  onSelect: (name: string, value: string) => void;
}

const DropDown = ({
  name,
  list,
  placeholder,
  selectValue,
  disabled = false,
  curDropDown,
  handleDropDown,
  onSelect,
}: Props) => {
  const isOpen = curDropDown === name;

  const onClickDropDown = () => {
    if (!disabled) {
      handleDropDown(name);
    }
  };

  const onSelectItem = (e: MouseEvent<HTMLDivElement>, value: string) => {
    e.stopPropagation();
    onSelect(name, value);
    handleDropDown('');
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
      <div className={`${isOpen ? 'rotate-0' : 'rotate-180'} transition-all`}>
        <TbCaretDownFilled color={`${disabled ? 'gray' : ''}`} />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3 absolute left-[-1px] right-[-1px] top-[30px] p-2 max-h-[120px] overflow-scroll bg-white border-[1px] border-solid border-gray rounded-sm z-10">
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
