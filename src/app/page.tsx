'use client';

import { useRouter } from 'next/navigation';

import { Cta } from '@/components/atoms';
import { Text } from '@/components/atoms/texts';
import { SubTitleBox } from '@/components/molecules';
import {
  HomeMenuCard,
  TeamCard,
  MatchCard,
} from '@/components/molecules/cards';

const Home = () => {
  const router = useRouter();

  return (
    <article className="pb-24">
      <div className="p-4">
        <div className="flexBetweenCenter">
          <SubTitleBox title="오늘의 매치" />
          <Cta
            style="link"
            color="primary"
            value="더 보기"
            size="s"
            clickAction={() => {
              router.push('/match');
            }}
          />
        </div>
        <ul>
          {[1, 2, 3].map((el) => {
            return <MatchCard key={el} />;
          })}
        </ul>
      </div>

      <div className="p-4">
        <SubTitleBox title="팀 찾기" />
        <ul className="flex justify-center gap-4 py-4 flex-wrap">
          {[1, 2, 3, 4].map((el) => {
            return <HomeMenuCard key={el} icon="location" />;
          })}
        </ul>
      </div>

      <div className="py-4 pl-4">
        <SubTitleBox title="내 팀" />
        <ul className="p-4 w-full overflow-x-scroll scrollBarHide">
          <div className="flex gap-4 pr-4 w-max">
            {[1, 2, 3].map((el) => {
              return <TeamCard key={el} />;
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
    </article>
  );
};

export default Home;
