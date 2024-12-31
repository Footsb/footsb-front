import React from 'react';

interface Props {
  value: string;
  type?: string;
}

const Category = ({ value, type = 'default' }: Props) => {
  const labelColorType: { [key: string]: string } = {
    soccer: 'bg-[#F1F8FD] text-info',
    footsal: 'bg-[#FDF1F5] text-pink',
    needMember: 'bg-[#F1FDEC] text-primary',
    default: 'bg-[#FEF9EE] text-[#98690C]',
    info: 'bg-primary text-white',
  };

  return (
    <label
      className={`${labelColorType[type]} p-2 rounded-2xl text-sm font-semibold leading-none`}
    >
      {value}
    </label>
  );
};

export default Category;
