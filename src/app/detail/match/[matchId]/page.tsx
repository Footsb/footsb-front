'use client';

import { useRouter } from 'next/navigation';

import { IoIosArrowBack } from 'react-icons/io';
import { Text } from '@/components/atoms/texts';
import { LightTeamInfo } from '@/components/organism';
import { MatchOpponent } from '@/components/molecules/EmptyBox';
import { MatchCard } from '@/components/molecules/cards';
import { Cta } from '@/components/atoms';
import { useState } from 'react';

const MatchDetail = () => {
  const router = useRouter();
  const [currentSide, setCurrentSide] = useState('HOME');
  const hasOpponent = false;

  return (
    <article className="pb-24">
      <div className="p-3">
        <IoIosArrowBack
          size={18}
          onClick={() => {
            router.back();
          }}
        />
      </div>
      <MatchCard />
      <div className="flexCenter gap-4 my-4">
        <Cta
          value="HOME"
          style={currentSide === 'HOME' ? 'solid' : 'outline'}
          color="primary"
          size="s"
          clickAction={() => {
            setCurrentSide('HOME');
          }}
        />
        <Cta
          value="AWAY"
          style={currentSide === 'AWAY' ? 'solid' : 'outline'}
          color="danger"
          size="s"
          clickAction={() => {
            setCurrentSide('AWAY');
          }}
        />
      </div>
      <div>
        <LightTeamInfo side={currentSide} />
        {/* {currentSide === 'HOME' ? (
          <LightTeamInfo side="HOME" />
        ) : hasOpponent ? (
          <LightTeamInfo side="AWAY" />
        ) : (
          <MatchOpponent />
        )} */}
      </div>
    </article>
  );
};

export default MatchDetail;
