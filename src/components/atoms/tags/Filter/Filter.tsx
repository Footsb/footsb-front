import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface Props {
  value: string;
  deleteAction: (value: string) => void;
}

const Filter = ({ value, deleteAction }: Props) => {
  return (
    <div className="flex items-center gap-1 p-2 border-[1px] border-solid border-black rounded-xl text-sm font-medium leading-none">
      {value}
      <IoIosCloseCircleOutline onClick={() => deleteAction(value)} />
    </div>
  );
};

export default Filter;
