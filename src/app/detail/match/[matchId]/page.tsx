'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { IoIosArrowBack } from 'react-icons/io';
import { Text } from '@/components/atoms/texts';
import { LightTeamInfo, PageLayout } from '@/components/organism';
import { MatchOpponent } from '@/components/molecules/EmptyBox';
import { MatchCard } from '@/components/molecules/cards';
import { Cta } from '@/components/atoms';

const MatchDetail = () => {
  const router = useRouter();
  const [currentSide, setCurrentSide] = useState('HOME');
  const hasOpponent = false;

  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default MatchDetail;
