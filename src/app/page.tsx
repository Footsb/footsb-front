import { FilterBox } from '@/components/molecules';
import { TeamList } from '@/components/organism';

const Home = () => {
  return (
    <main className="relative mt-[54px] py-3 px-8">
      <FilterBox />
      <ul className="flex flex-col gap-2 mt-4">
        <TeamList />
      </ul>
    </main>
  );
};

export default Home;
