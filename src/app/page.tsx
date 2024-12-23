import { FilterBox } from '@/components/molecules';
import { TeamList } from '@/components/organism/listCard';

const Home = () => {
  return (
    <article>
      <FilterBox />
      <ul className="flex flex-col gap-4 mt-4">
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
      </ul>
    </article>
  );
};

export default Home;
