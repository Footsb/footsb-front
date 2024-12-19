'use client';

import React from 'react';

import { Cta } from '@/components/atoms';
import { IconInfo, Text } from '@/components/atoms/texts';
import { Category } from '@/components/atoms/labels';
import { useRouter } from 'next/navigation';

const TeamList = () => {
  const router = useRouter();

  return (
    <li className="flex items-center justify-between py-4 px-6 grayborder">
      <Text value={'한마음 조기 축구회'} type="l_bold" />
      <div className="flex gap-4">
        <IconInfo icon="location">
          <Text value={'서울 용산구'} type="s_regular" />
        </IconInfo>
        <IconInfo icon="time">
          <Text value={'토,일 8:00'} type="s_regular" />
        </IconInfo>
        <IconInfo icon="people">
          <Text value={'23/30'} type="s_regular" />
        </IconInfo>
      </div>
      <div className="flex gap-2">
        <Category value="축구" type="soccer" />
        <Category value="팀원 모집" type="needMember" />
        <Category value="여성" />
      </div>
      <Cta
        value="팀 보러 가기"
        style="solid"
        color="primary"
        clickAction={() => {
          router.push('/detail/team/1');
        }}
      />
    </li>
  );
};

export default TeamList;
