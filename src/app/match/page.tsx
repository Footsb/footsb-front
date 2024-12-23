import React from 'react';
import { FilterBox } from '@/components/molecules';
import { MatchList } from '@/components/organism/listCard';

const Match = () => {
  return (
    <article>
      <FilterBox />
      <ul className="flex flex-col gap-4 mt-4">
        <MatchList />
      </ul>
    </article>
  );
};

export default Match;
