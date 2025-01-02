import React from 'react';

interface Props {
  value: string;
  type?: string;
}

const Category = ({ value }: Props) => {
  // const labelColorType: { [key: string]: string } = {
  //   soccer: 'bg-[#F1F8FD] text-info',
  //   footsal: 'bg-[#FDF1F5] text-pink',
  //   member: 'bg-[#F1FDEC] text-primary',
  //   default: 'bg-[#FEF9EE] text-[#98690C]',
  //   info: 'bg-primary text-white',
  // };

  return (
    <div className="py-1 px-2 border-[1px] border-solid border-black rounded text-xs font-medium leading-none">
      {value}
    </div>
  );
};

export default Category;
