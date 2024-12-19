'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Cta } from '@/components/atoms';

import defaultImage from '@_assets/images/default.png';

const TeamDetail = () => {
  const router = useRouter();
  // const isLogin = localStorage.getItem('footsbToken');

  return (
    <article className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <Cta
          style="link"
          color="info"
          value="뒤로가기"
          size="s"
          clickAction={() => {
            router.back();
          }}
        />
        <div>
          {/* {isLogin && (
            <Cta
              style="solid"
              color="primary"
              value="팀 정보 변경"
              clickAction={() => {}}
            />
          )} */}
        </div>
      </div>
      <div className="relative h-[250px] w-full rounded-xl overflow-hidden">
        <Image src={defaultImage} alt="" layout="fill" objectFit="cover" />
      </div>
    </article>
  );
};

export default TeamDetail;
