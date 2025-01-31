'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { GiGriffinShield } from 'react-icons/gi';

import { Cta } from '@/components/atoms/buttons';
import { Text } from '@/components/atoms/texts';
import { Record } from '@/components/atoms/ui';
import { SelectBox } from '@/components/molecules';

import { FormationInfo, PlayerSimpleInfo } from '@/types/team';
import defaultImage from '@_assets/images/default.png';

interface Props {
  side: string;
}

const LightTeamInfo = ({ side }: Props) => {
  const [formationList, setFormationList] = useState<FormationInfo[]>([]);
  const [playerList, setPlayerList] = useState<PlayerSimpleInfo[]>([]);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
        <div className="flexCenter flex-col p-8 absolute top-0 left-0 w-full h-full z-10 bg-opacity-40 bg-black break-all text-center">
          <div className="flexCenter p-1 mb-2 rounded-lg bg-white">
            <GiGriffinShield size={36} cursor={'pointer'} color={'#DE3B40'} />
          </div>
          <Text value={'한마음 FC'} type="xl_bold" extraStyle={'text-white'} />
        </div>
        <Image
          src={defaultImage}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-2">
        <Text value="최근 전적 : " type="s_regular" />
        {TEST_RECORD.map((el, idx) => {
          return <Record type={el} key={idx} />;
        })}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <SelectBox title="주 포메이션" list={formationList} />
        <SelectBox title="키 플레이어어" list={playerList} />
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
            router.push('/team/detail/1');
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
