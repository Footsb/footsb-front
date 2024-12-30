'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Cta } from '@/components/atoms';
import { Text } from '@/components/atoms/texts';
import { Record } from '@/components/atoms/ui';
import { FormationCard, PlayerCard } from '@/components/atoms/items';

import defaultImage from '@_assets/images/default.png';

interface Props {
  side: string;
}

const LightTeamInfo = ({ side }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <Text
        value={side}
        type="l_bold"
        extraStyle={`text-${
          side === 'HOME' ? 'primary' : 'danger'
        } text-center`}
      />
      <div className="relative h-[250px] rounded-xl overflow-hidden">
        <Image src={defaultImage} alt="" layout="fill" objectFit="cover" />
      </div>
      <Text
        value={'한마음 조기 축구회'}
        type="xl_bold"
        extraStyle={'text-center'}
      />
      <div className="flex items-center gap-3">
        <Text value={'실력 : 하하'} type="s_regular" />
        <Text value={'매너도 : 120점'} type="s_regular" />
        <div className="flex items-center gap-2">
          <Text value={'최근 전적 :'} type="s_regular" />
          {TEST_RECORD.map((el, idx) => {
            return <Record type={el} key={idx} />;
          })}
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-3 w-full">
          <Text value="주 포메이션" type="s_regular" />
          {TEST_FORMATION.map((list) => {
            return <FormationCard key={list} formation={list} />;
          })}
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Text value="키 플레이어" type="s_regular" />
          {TEST_PLAYER.map(({ id, name, position }) => {
            return <PlayerCard key={id} position={position} name={name} />;
          })}
        </div>
      </div>
      <div className="flexCenter gap-3">
        <Cta
          value="용병 신청"
          style="solid"
          color="accent"
          size="s"
          clickAction={() => {}}
        />
        <Cta
          value="팀 보러 가기"
          style="solid"
          color="primary"
          size="s"
          clickAction={() => {
            router.push('/detail/team/1');
          }}
        />
      </div>
    </div>
  );
};

export default LightTeamInfo;

const TEST_RECORD = ['win', 'draw', 'lose', 'win', 'win'];
const TEST_FORMATION = ['4-3-3', '4-4-2'];
const TEST_PLAYER = [
  { id: 1, name: '김상웅', position: 'MF' },
  { id: 2, name: '김상웅', position: 'MF' },
];
