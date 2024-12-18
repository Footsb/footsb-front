import React from 'react';

import { Logo } from '@/components/atoms';
import { GnbActionBox, Navigate } from '@/components/molecules';

const Gnb = () => {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between py-2 px-4 w-full bg-[#1D2128] z-50">
      <Logo />
      <Navigate />
      <GnbActionBox />
    </nav>
  );
};

export default Gnb;
