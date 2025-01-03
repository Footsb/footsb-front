'use client';

import { useRouter } from 'next/navigation';

import { GiGriffinShield } from 'react-icons/gi';
import { Divider } from '@/components/atoms';
import { IconInfo, Text } from '@/components/atoms/texts';
import { Category } from '@/components/atoms/tags';

const TeamList = () => {
  const router = useRouter();

  return (
    <>
      <li
        className="grid grid-cols-[64px_1fr] items-center gap-3 py-4"
        onClick={() => {
          router.push('/detail/team/1');
        }}
      >
        <div className="flexCenter p-2">
          <GiGriffinShield size={48} cursor={'pointer'} color={'#DE3B40'} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Text value={'한마음 FC'} type="m_bold" />
          <div className="flex gap-2">
            <Category value="축구" />
            <Category value="모집 중" />
            <Category value="남여 무관" />
          </div>
          <div className="flex flex-wrap gap-3">
            <IconInfo icon="location">
              <Text value={'서울 용산구'} type="xs_regular" />
            </IconInfo>
            <IconInfo icon="time">
              <Text value={'토,일 8:00'} type="xs_regular" />
            </IconInfo>
            <IconInfo icon="people">
              <Text value={'23/30'} type="xs_regular" />
            </IconInfo>
          </div>
        </div>
      </li>
      <Divider />
    </>
  );
};

export default TeamList;
