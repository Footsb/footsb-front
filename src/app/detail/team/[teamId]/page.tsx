'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Cta } from '@/components/atoms';
import { IconInfo, Text } from '@/components/atoms/texts';
import { PlayerCard, FormationCard } from '@/components/atoms/items';
import { Category } from '@/components/atoms/labels';
import ModalLayout from '@/components/atoms/Modal';

import defaultImage from '@_assets/images/default.png';
import { TeamInfoModal } from '@/components/organism/modalContents';

const TeamDetail = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectFormation, setSelectFormation] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);

  const router = useRouter();
  // const isLogin = localStorage.getItem('footsbToken');

  const handleTeamInfo = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <article className="flex flex-col gap-5">
      <div className="flexBetweenCenter">
        <Cta
          style="link"
          color="default"
          value="뒤로가기"
          size="s"
          clickAction={() => {
            router.back();
          }}
        />
        <div>
          {/* {isLogin && (
            <Cta
              style="solid"
              color="primary"
              value="팀 정보 변경"
              clickAction={() => {}}
            />
          )} */}
        </div>
      </div>
      <div className="relative h-[250px] w-full rounded-xl overflow-hidden">
        <Image src={defaultImage} alt="" layout="fill" objectFit="cover" />
      </div>
      <section className="flex flex-col gap-8">
        <div className="flexBetweenCenter">
          <div className="flex gap-4">
            <Text value="한마음 조기 축구회" type="xl_bold" />
            <div className="flex gap-2">
              <Category value="축구" type="soccer" />
              <Category value="팀원 모집" type="needMember" />
              <Category value="여성" />
            </div>
          </div>
          <Cta
            value="가입 신청"
            style="solid"
            color="primary"
            size="s"
            clickAction={() => {}}
          />
        </div>
        <div className="flex items-center justify-center py-4 px-8 min-h-32 w-full grayborder text-center">
          Hello World!
        </div>
        <div className="flex flex-col gap-4">
          <Text value="기본 정보" type="l_bold" />
          <div className="flex gap-4 mt-4">
            <IconInfo icon="location">
              <Text value={'서울 용산구'} type="s_regular" />
            </IconInfo>
            <IconInfo icon="time">
              <Text value={'토,일 8:00'} type="s_regular" />
            </IconInfo>
            <IconInfo icon="people">
              <Text value={'23/30'} type="s_regular" />
            </IconInfo>
          </div>
          <div className="flex gap-4">
            <Text value={'창단연도 : 2011년'} type="s_regular" />
            <Text value={'회장 : 웅상김'} type="s_regular" />
            <Text value={'실력 : 하하'} type="s_regular" />
            <Text value={'매너도 : 120점'} type="s_regular" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flexBetweenCenter mb-4">
            <Text value="팀 정보" type="l_bold" />
            <Cta
              value="정보 변경 하기"
              style="solid"
              color="primary"
              size="s"
              clickAction={handleTeamInfo}
            />
          </div>
          <div className="grid grid-cols-[1fr_1fr_2fr] gap-4">
            <div className="flex flex-col gap-3">
              <Text value="주 포메이션" type="s_regular" />
              <FormationCard formation="4-3-3" />
              <FormationCard formation="4-3-2-1" />
              <FormationCard formation="5-3-2" />
            </div>
            <div className="flex flex-col gap-3">
              <Text value="키 플레이어" type="s_regular" />
              <PlayerCard position="MF" name="김상웅" />
              <PlayerCard position="MF" name="김상웅" />
              <PlayerCard position="MF" name="김상웅" />
            </div>
            <div className="flex flex-col gap-3">
              <Text value="최근 매치" type="s_regular" />
              <div className="flexBetweenCenter grayborder p-3">
                <Text value="2024.11.17" type="s_regular" />
                <Text value="vs 신도림 조기 축구회" type="m_bold" />
                <Text value="승리" type="m_bold" extraStyle="text-primary" />
                <Cta
                  value="매치 상세"
                  style="solid"
                  color="info"
                  size="s"
                  clickAction={() => {
                    router.push('/detail/match/1');
                  }}
                />
              </div>
              <div className="flexBetweenCenter grayborder p-3">
                <Text value="2024.11.17" type="s_regular" />
                <Text value="vs 신도림 조기 축구회" type="m_bold" />
                <Text value="승리" type="m_bold" extraStyle="text-primary" />
                <Cta
                  value="매치 상세"
                  style="solid"
                  color="info"
                  size="s"
                  clickAction={() => {
                    router.push('/detail/match/1');
                  }}
                />
              </div>
              <div className="flexBetweenCenter grayborder p-3">
                <Text value="2024.11.17" type="s_regular" />
                <Text value="vs 신도림 조기 축구회" type="m_bold" />
                <Text value="승리" type="m_bold" extraStyle="text-primary" />
                <Cta
                  value="매치 상세"
                  style="solid"
                  color="info"
                  size="s"
                  clickAction={() => {
                    router.push('/detail/match/1');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Text value="매치" type="l_bold" />
          <div className="flexBetweenCenter relative grayborder p-4">
            <div className="flex flex-col gap-2">
              <IconInfo icon="time">
                <Text value={'2024.12.31 18:00'} type="s_regular" />
              </IconInfo>
              <IconInfo icon="location">
                <Text value={'중랑 구립 구장'} type="s_regular" />
              </IconInfo>
            </div>
            <div className="absolute left-2/4 translate-x-[-50%] flex gap-2 ">
              <Text value="한마음 조기 축구회" type="l_bold" />
              <Text value="vs" type="m_bold" />
              <Text value="한마음 조기 축구회" type="l_bold" />
            </div>
            <Cta
              value="매치 상세"
              style="solid"
              color="info"
              size="s"
              clickAction={() => {
                router.push('/detail/match/1');
              }}
            />
          </div>
          <div className="flexBetweenCenter relative grayborder p-4">
            <div className="flex flex-col gap-2">
              <IconInfo icon="time">
                <Text value={'2024.12.31 18:00'} type="s_regular" />
              </IconInfo>
              <IconInfo icon="location">
                <Text value={'중랑 구립 구장'} type="s_regular" />
              </IconInfo>
            </div>
            <div className="absolute left-2/4 translate-x-[-50%] flex gap-2 ">
              <Text value="한마음 조기 축구회" type="l_bold" />
              <Text value="vs" type="m_bold" />
              <Text value="한마음 조기 축구회" type="l_bold" />
            </div>
            <Cta
              value="매치 상세"
              style="solid"
              color="info"
              size="s"
              clickAction={() => {
                router.push('/detail/match/1');
              }}
            />
          </div>
          <div className="flexBetweenCenter relative grayborder p-4">
            <div className="flex flex-col gap-2">
              <IconInfo icon="time">
                <Text value={'2024.12.31 18:00'} type="s_regular" />
              </IconInfo>
              <IconInfo icon="location">
                <Text value={'중랑 구립 구장'} type="s_regular" />
              </IconInfo>
            </div>
            <div className="absolute left-2/4 translate-x-[-50%] flex gap-2 ">
              <Text value="한마음 조기 축구회" type="l_bold" />
              <Text value="vs" type="m_bold" />
              <Text value="한마음 조기 축구회" type="l_bold" />
            </div>
            <Cta
              value="매치 상세"
              style="solid"
              color="info"
              size="s"
              clickAction={() => {
                router.push('/detail/match/1');
              }}
            />
          </div>
        </div>
      </section>
      <ModalLayout isOpen={isOpenModal} closeAction={handleTeamInfo}>
        <TeamInfoModal />
      </ModalLayout>
    </article>
  );
};

export default TeamDetail;
