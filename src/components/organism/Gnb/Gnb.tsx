import React from 'react';

import { Logo } from '@/components/atoms';
import { GnbActionBox, Navigate } from '@/components/molecules';

const Gnb = () => {
  return (
    <nav className="fixed top-0 left-0 py-2 px-4 w-full bg-[#1D2128] z-50">
      <div className="flexBetweenCenter max-w-[1920px] mx-auto">
        <Logo />
        <Navigate />
        <GnbActionBox />
      </div>
    </nav>
  );
};

export default Gnb;
