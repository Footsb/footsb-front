import React, { ReactNode } from 'react';
import { GiFootprint } from 'react-icons/gi';
import { IoIosFootball } from 'react-icons/io';
import {
  IoLocationOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { MdDirectionsRun } from 'react-icons/md';
import { TbInfoTriangle, TbPlayFootball } from 'react-icons/tb';

interface Props {
  icon: string;
  children: ReactNode;
}

const IconInfo = ({ icon, children }: Props) => {
  const iconComponents: { [key: string]: ReactNode } = {
    location: <IoLocationOutline />,
    time: <IoTimeOutline />,
    people: <IoPeopleOutline />,
    player: <TbPlayFootball />,
    info: <TbInfoTriangle />,
    play: <MdDirectionsRun />,
    goal: <IoIosFootball />,
    assist: <GiFootprint />,
  };

  return (
    <div className="flex items-center gap-1">
      {iconComponents[icon]}
      {children}
    </div>
  );
};

export default IconInfo;
