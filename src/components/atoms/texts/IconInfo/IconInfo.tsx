import React, { ReactNode } from 'react';
import {
  IoLocationOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { TbInfoTriangle } from 'react-icons/tb';

interface Props {
  icon: string;
  children: ReactNode;
}

const IconInfo = ({ icon, children }: Props) => {
  const iconComponents: { [key: string]: ReactNode } = {
    location: <IoLocationOutline />,
    time: <IoTimeOutline />,
    people: <IoPeopleOutline />,
    info: <TbInfoTriangle />,
  };

  return (
    <div className="flex items-center gap-1">
      {iconComponents[icon]}
      {children}
    </div>
  );
};

export default IconInfo;
