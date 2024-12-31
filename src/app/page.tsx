import { Logo } from '@/components/atoms';
import { Text } from '@/components/atoms/texts';
import {
  HomeMenuCard,
  HomeTeamCard,
  MatchCard,
} from '@/components/molecules/cards';

const Home = () => {
  return (
    <article className="pb-20">
      <div className="flexCenter sticky top-0 py-2 bg-white shadow-sm">
        <Logo />
      </div>

      <div className="py-4">
        <div className="relative w-fit">
          <Text value="내 팀" type="m_bold" extraStyle="px-4 relative" />
          <div className="absolute right-2 -bottom-[3px] pl-4 w-1/2 h-3 bg-lime-300 -skew-y-6 -z-10" />
        </div>
        <ul className="p-4 w-full overflow-x-scroll">
          <div className="flex gap-4 pr-4 w-max">
            {[1, 2, 3].map((el) => {
              return <HomeTeamCard key={el} />;
            })}
            <li className="flexCenter p-3 min-w-[240px] w-full h-[140px] rounded-md border-2 border-dashed border-gray">
              <Text
                value="팀 등록하기"
                type="m_bold"
                extraStyle="text-primary"
              />
            </li>
          </div>
        </ul>
      </div>

      <div className="py-4">
        <div className="relative w-fit">
          <Text value="오늘의 매치" type="m_bold" extraStyle="px-4 relative" />
          <div className="absolute right-2 -bottom-[3px] pl-4 w-1/2 h-3 bg-orange-300 -skew-y-6 -z-10" />
        </div>
        <ul className="flex flex-col gap-4 p-4">
          {[1, 2, 3].map((el) => {
            return <MatchCard key={el} />;
          })}
        </ul>
      </div>

      <div className="py-4">
        <div className="relative w-fit">
          <Text value="팀 찾기" type="m_bold" extraStyle="px-4 relative" />
          <div className="absolute right-2 -bottom-[3px] pl-4 w-1/2 h-3 bg-teal-200 -skew-y-6 -z-10" />
        </div>
        <ul className="flex justify-center gap-4 p-4 flex-wrap">
          {[1, 2, 3, 4].map((el) => {
            return <HomeMenuCard key={el} icon="location" />;
          })}
        </ul>
      </div>
    </article>
  );
};

export default Home;
