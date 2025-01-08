'use client';

import { IoMdSettings } from 'react-icons/io';
import { Divider } from '@/components/atoms';
import { IconInfo, Text } from '@/components/atoms/texts';
import { Category, Level } from '@/components/atoms/tags';
import { SubTitleBox } from '@/components/molecules';
import { PageLayout } from '@/components/organism/common';
import { MyTeamList } from '@/components/organism';

const MyPage = () => {
  return (
    <PageLayout>
      <section className="p-4">
        <div className="flex justify-between items-start">
          <SubTitleBox title="기본 정보" />
          <IoMdSettings size={18} />
        </div>
        <div className="my-6">
          <div className="flex items-center gap-4">
            <Text value="김상웅" type="l_bold" />
            <Level type="master" />
          </div>
          <div className="grid grid-cols-[80px_1fr] items-top gap-y-5 mt-6">
            <Text value="최근 기록" type="s_bold" />
            <div className="flex items-center gap-4">
              <IconInfo icon="play">
                <Text value={'10'} type="s_regular" />
              </IconInfo>
              <IconInfo icon="goal">
                <Text value={'3'} type="s_regular" extraStyle="text-primary" />
              </IconInfo>
              <IconInfo icon="assist">
                <Text value={'2'} type="s_regular" extraStyle="text-danger" />
              </IconInfo>
            </div>

            <Text value="선호 지역" type="s_bold" />
            <div className="flex items-center gap-3 flex-wrap">
              <Category value="서울 중랑구" type="info" />
              <Category value="서울 용산구" type="info" />
              <Category value="서울 마포구" type="info" />
            </div>

            <Text value="선호 포지션" type="s_bold" />
            <div className="flex flex-col gap-2 justify-between">
              <div className="flex items-center gap-3">
                <Category value="CM" type="info" />
                <Category value="AM" type="info" />
                <Category value="LWF" type="info" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <MyTeamList />
      <Divider />
    </PageLayout>
  );
};

export default MyPage;
