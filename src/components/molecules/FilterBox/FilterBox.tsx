'use client';

import React from 'react';
import useHandleQuery from '@/hooks/useQuery';

import { BiFilter } from 'react-icons/bi';
import { Filter } from '@/components/atoms/labels';

const FilterBox = () => {
  const { getQueryList } = useHandleQuery();
  const { location, day } = getQueryList('teamList');

  return (
    <div className="flexBetweenCenter">
      <div className="flex gap-2">
        {location.map((el, idx) => {
          return <Filter title={el} key={idx} queryKey="location" />;
        })}
        {day.map((el, idx) => {
          return <Filter title={el} key={idx} queryKey="day" />;
        })}
      </div>
      <BiFilter size={24} cursor={'pointer'} />
    </div>
  );
};

export default FilterBox;
