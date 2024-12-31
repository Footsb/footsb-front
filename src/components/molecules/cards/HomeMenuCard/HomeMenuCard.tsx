import { Text } from '@/components/atoms/texts';
import { ReactNode } from 'react';
import { IoLocationOutline } from 'react-icons/io5';

interface Props {
  icon: string;
}

const HomeMenuCard = ({ icon }: Props) => {
  const iconComponents: { [key: string]: ReactNode } = {
    location: <IoLocationOutline size={24} />,
    // time: <IoTimeOutline />,
    // people: <IoPeopleOutline />,
    // info: <TbInfoTriangle />,
  };

  return (
    <li className="flex flex-col items-center gap-6 p-3 w-[130px] rounded-md bg-orange-400 shadow-sm">
      <div className="p-2 bg-white rounded-full">{iconComponents[icon]}</div>
      <Text value="내 위치 기반" type="m_bold" />
    </li>
  );
};

export default HomeMenuCard;
