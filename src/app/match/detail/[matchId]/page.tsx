'use client';

import { useState } from 'react';

import { Text } from '@/components/atoms/texts';
import { Back, Cta } from '@/components/atoms/buttons';
import { LightTeamInfo } from '@/components/organism';
import { PageLayout } from '@/components/organism/common';
import { MatchOpponent } from '@/components/molecules/EmptyBox';
import { MatchCard } from '@/components/molecules/cards';

const MatchDetail = () => {
  const [currentSide, setCurrentSide] = useState('HOME');
  const hasAway = false;

  return (
    <PageLayout>
      <div className="p-3">
        <Back />
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
      <div className="p-4">
        {currentSide === 'HOME' || hasAway ? (
          <LightTeamInfo side={currentSide} />
        ) : (
          <MatchOpponent />
        )}
      </div>
    </PageLayout>
  );
};

export default MatchDetail;
