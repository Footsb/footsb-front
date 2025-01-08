import { FilterBox } from '@/components/molecules';
import { MatchCard } from '@/components/molecules/cards';
import { PageLayout } from '@/components/organism/common';

const Match = () => {
  return (
    <PageLayout>
      <FilterBox />
      <ul className="flex flex-col p-4">
        {[1, 2, 3].map((el) => {
          return <MatchCard key={el} />;
        })}
      </ul>
    </PageLayout>
  );
};

export default Match;
