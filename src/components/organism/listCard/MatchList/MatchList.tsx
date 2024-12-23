'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { IconInfo, Text } from '@/components/atoms/texts';
import { Cta } from '@/components/atoms';

const MatchList = () => {
  const router = useRouter();

  return (
    <li className="flexBetweenCenter py-4 px-6 grayborder">
      <div className="flex flex-col gap-2">
        <IconInfo icon="time">
          <Text value={'2024.12.31 18:00'} type="s_regular" />
        </IconInfo>
        <IconInfo icon="location">
          <Text value={'중랑 구립 구장'} type="s_regular" />
        </IconInfo>
      </div>
      <div className="absolute left-2/4 translate-x-[-50%] flex gap-3 m-auto">
        <Text value={'한마음 조기 축구회'} type="l_bold" />
        <Text value={'vs'} type="m_bold" />
        <Text value={'신도림 조기 축구회'} type="l_bold" />
      </div>
      <Cta
        value="상세 보기"
        style="solid"
        color="primary"
        size="s"
        clickAction={() => {
          router.push('/detail/match/1');
        }}
      />
    </li>
  );
};

export default MatchList;
