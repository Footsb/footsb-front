'use client';

import { useRouter } from 'next/navigation';

import { Cta } from '@/components/atoms/buttons';
import { SubTitleBox } from '@/components/molecules';
import { MatchCard } from '@/components/molecules/cards';

const TodayMatch = () => {
  const router = useRouter();

  return (
    <section className="p-4">
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
      <ul className="flex flex-col gap-4 mt-4">
        {[1, 2, 3].map((el) => {
          return <MatchCard key={el} />;
        })}
      </ul>
    </section>
  );
};

export default TodayMatch;
