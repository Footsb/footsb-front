import React, { ReactNode } from 'react';
import {
  IoLocationOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from 'react-icons/io5';

interface Props {
  icon: string;
  children: ReactNode;
}

const IconInfo = ({ icon, children }: Props) => {
  const iconComponents: { [key: string]: ReactNode } = {
    location: <IoLocationOutline />,
    time: <IoTimeOutline />,
    people: <IoPeopleOutline />,
  };

  return (
    <div className="flex gap-1">
      {iconComponents[icon]}
      {children}
    </div>
  );
};

export default IconInfo;
