import React from 'react';
import useHandleQuery from '@/hooks/useQuery';

import { BsXCircleFill } from 'react-icons/bs';

interface Props {
  title: string;
  queryKey: string;
}

const Filter = ({ title, queryKey }: Props) => {
  const { deleteQuery } = useHandleQuery();

  return (
    <label className="flex gap-1 items-center p-2 border-[#EEEDF2] border-2 border-solid rounded-lg text-sm leading-none">
      {title}
      <BsXCircleFill
        size={12}
        style={{ lineHeight: 0 }}
        onClick={() => {
          deleteQuery(queryKey, title);
        }}
      />
    </label>
  );
};

export default Filter;
