import React from 'react';

interface Props {
  title: string;
  queryKey: string;
  selectFilterList: { [key: string]: string[] };
  clickButton: (key: string, value: string) => void;
}

const FilterButton = ({
  title,
  queryKey,
  selectFilterList,
  clickButton,
}: Props) => {
  const isSelected = selectFilterList[queryKey].includes(title);

  const styleType = {
    active: 'bg-accent text-white',
    inactive: 'bg-slate-200 text-gray',
  };

  return (
    <div
      className={`${
        isSelected ? styleType['active'] : styleType['inactive']
      } p-2 rounded-md text-base font-semibold leading-none`}
      onClick={() => clickButton(queryKey, title)}
    >
      {title}
    </div>
  );
};

export default FilterButton;
