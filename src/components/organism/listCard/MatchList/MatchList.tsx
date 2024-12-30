'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { IconInfo, Text } from '@/components/atoms/texts';
import { Cta } from '@/components/atoms';

const MatchList = () => {
  const router = useRouter();

  return (
    <li className="flexBetweenCenter p-6 grayborder">
      <div className="flex flex-col gap-2">
        <IconInfo icon="time">
          <Text value={'2024.12.31 18:00'} type="s_regular" />
        </IconInfo>
        <IconInfo icon="location">
          <Text value={'중랑 구립 구장'} type="s_regular" />
        </IconInfo>
      </div>
      <div className="absolute left-2/4 translate-x-[-50%] flex items-center gap-5 m-auto">
        <div className="relative">
          <Text
            value={'HOME'}
            type="s_bold"
            extraStyle={
              'absolute left-2/4 translate-x-[-50%] top-[-20px] text-primary'
            }
          />
          <Text value={'한마음 조기 축구회'} type="l_bold" />
        </div>
        <Text value={'vs'} type="xl_bold" />
        <div className="relative">
          <Text
            value={'AWAY'}
            type="s_bold"
            extraStyle={
              'absolute left-2/4 translate-x-[-50%] top-[-20px] text-danger'
            }
          />
          <Text value={'한마음 조기 축구회'} type="l_bold" />
        </div>
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
