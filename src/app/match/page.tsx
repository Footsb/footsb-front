import React from 'react';
import { FilterBox } from '@/components/molecules';
import { MatchCard } from '@/components/molecules/cards';

const Match = () => {
  return (
    <article className="pb-24">
      <FilterBox />
      <ul className="flex flex-col p-4">
        {[1, 2, 3].map((el) => {
          return <MatchCard key={el} />;
        })}
      </ul>
    </article>
  );
};

export default Match;
