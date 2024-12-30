'use client';

import React from 'react';

import Image from 'next/image';
import { Cta } from '@/components/atoms';
import { Text } from '@/components/atoms/texts';

import defaultImage from '@_assets/images/default.png';
import { Category } from '@/components/atoms/labels';

const MyPage = () => {
  return (
    <article className="flex flex-col gap-8">
      <Text value="마이 페이지" type="xl_bold" />
      <div className="p-4 grayborder">
        <div className="flex justify-between items-start">
          <Text value="기본 정보" type="l_bold" />
          <Cta
            value="정보 변경"
            style="solid"
            color="primary"
            size="s"
            clickAction={() => {}}
          />
        </div>
        <div className="flex gap-4 mt-2">
          <div className="relative w-[150px] h-[150px] rounded-xl overflow-hidden">
            <Image src={defaultImage} alt="" layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-end gap-3">
              <Text value="김상웅" type="l_bold" />
              <Text value="010-0000-0000" type="m_regular" />
            </div>
            <div className="flex items-center gap-3">
              <Text value="선호 지역" type="m_bold" />
              <Category value="서울 중랑구" type="info" />
              <Category value="서울 용산구" type="info" />
              <Category value="서울 마포구" type="info" />
            </div>
            <div className="flex items-center gap-3">
              <Text value="선호 포지션" type="m_bold" />
              <Category value="CM" type="info" />
              <Category value="AM" type="info" />
              <Category value="LWF" type="info" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MyPage;
