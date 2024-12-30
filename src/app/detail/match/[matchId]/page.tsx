'use client';

import { useRouter } from 'next/navigation';

import { Cta } from '@/components/atoms';
import { IconInfo, Text } from '@/components/atoms/texts';
import { LightTeamInfo } from '@/components/organism';
import { MatchOpponent } from '@/components/molecules/EmptyBox';

const MatchDetail = () => {
  const router = useRouter();
  const hasOpponent = false;

  return (
    <article className="flex flex-col gap-4">
      <div>
        <Cta
          style="link"
          color="default"
          value="뒤로가기"
          size="s"
          clickAction={() => {
            router.back();
          }}
        />
      </div>
      <div className="flex justify-center gap-2">
        <IconInfo icon="time">
          <Text value={'2024.12.31 18:00'} type="s_regular" />
        </IconInfo>
        <IconInfo icon="location">
          <Text value={'중랑 구립 구장'} type="s_regular" />
        </IconInfo>
      </div>
      <div className="grid grid-cols-[1fr_50px_1fr] gap-4">
        <LightTeamInfo side="HOME" />
        <div className="h-[340px] flexCenter">
          <Text value="VS" type="xl_bold" />
        </div>
        {hasOpponent ? <LightTeamInfo side="AWAY" /> : <MatchOpponent />}
      </div>
    </article>
  );
};

export default MatchDetail;
