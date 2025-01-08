'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { GiGriffinShield } from 'react-icons/gi';
import { HiPencilAlt } from 'react-icons/hi';

import { Cta, Divider } from '@/components/atoms';
import { IconInfo, Text } from '@/components/atoms/texts';
import { PlayerCard, FormationCard } from '@/components/atoms/items';
import { Category } from '@/components/atoms/tags';
import ModalLayout from '@/components/atoms/Modal';
import { SubTitleBox } from '@/components/molecules';
import { MatchCard, MatchResultCard } from '@/components/molecules/cards';
import { PageLayout } from '@/components/organism';
import { TeamInfoModal } from '@/components/organism/modalContents';

import { PlayerSimpleInfo } from '@/types/team';
import defaultImage from '@_assets/images/default.png';

const TeamDetail = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formationList, setFormationList] = useState<string[]>([]);
  const [playerList, setPlayerList] = useState<PlayerSimpleInfo[]>([]);

  const router = useRouter();
  // const isLogin = localStorage.getItem('footsbToken');

  const handleTeamInfo = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <PageLayout>
      <div className="flexBetweenCenter p-3">
        <IoIosArrowBack
          size={18}
          onClick={() => {
            router.back();
          }}
        />
        <IoMdSettings size={18} />
      </div>
      <div className="relative h-[200px] w-full">
        <div className="flexCenter flex-col gap-5 p-8 absolute top-0 left-0 w-full h-full z-10 bg-opacity-75 bg-black break-all text-center">
          <Divider />
          <Text
            value="WIN OR NOTHING"
            type="xl_bold"
            extraStyle="leading-tight text-white italic"
          />
          <Divider />
        </div>
        <Image
          src={defaultImage}
          alt=""
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <section className="flex flex-col px-3">
        <div className="flexBetweenCenter mt-2">
          <div className="flex items-center gap-2">
            <div className="flexCenter py-2">
              <GiGriffinShield size={36} cursor={'pointer'} color={'#DE3B40'} />
            </div>
            <Text value="한마음 FC" type="l_bold" />
          </div>
          <Cta
            value="가입 신청"
            style="solid"
            color="primary"
            size="s"
            clickAction={() => {}}
          />
        </div>
        <div className="flex gap-2">
          <Category value="축구" type="soccer" />
          <Category value="모집 중" type="needMember" />
          <Category value="남여 무관" />
        </div>
        <Divider />
        <div className="flexCenter px-4 min-h-20 text-center break-all">
          Hello World!
        </div>
        <Divider />

        <div className="mb-4">
          <SubTitleBox title="기본 정보" />
          <div className="grid grid-cols-2 mt-5">
            <div className="flex flex-col justify-between h-[100px]">
              <IconInfo icon="location">
                <Text value={'서울 용산구'} type="s_regular" />
              </IconInfo>
              <IconInfo icon="time">
                <Text value={'토,일 8:00'} type="s_regular" />
              </IconInfo>
              <IconInfo icon="people">
                <Text value={'23/30'} type="s_regular" />
              </IconInfo>
              <IconInfo icon="player">
                <Text value={'선출 : 2명'} type="s_regular" />
              </IconInfo>
            </div>
            <div className="flex flex-col justify-between h-[100px]">
              <Text value={'창단연도 : 2011년'} type="s_regular" />
              <Text value={'회장 : 웅상김'} type="s_regular" />
              <Text value={'실력 : 하하'} type="s_regular" />
              <Text value={'매너도 : 120점'} type="s_regular" />
            </div>
          </div>
        </div>
        <Divider />

        <div className="mb-5">
          <div className="flexBetweenCenter mb-5">
            <SubTitleBox title="팀 정보" />
            <HiPencilAlt size={20} onClick={handleTeamInfo} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3 h-[144px]">
              <Text
                value="주 포메이션"
                type="s_regular"
                extraStyle="text-center"
              />
              <div className="flex flex-col gap-2 h-full">
                {formationList.length === 0 ? (
                  <div className="flexCenter px-4 h-full border-dashed border-gray border-2 rounded-lg">
                    <Text
                      value={`설정한\n포메이션이\n없어요!`}
                      type="s_regular"
                      extraStyle="text-center whitespace-pre-wrap	leading-5"
                    />
                  </div>
                ) : (
                  formationList.map((list) => {
                    return <FormationCard key={list} formation={list} />;
                  })
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3 h-[144px]">
              <Text
                value="키 플레이어"
                type="s_regular"
                extraStyle="text-center"
              />
              <div className="flex flex-col gap-2 h-full">
                {playerList.length === 0 ? (
                  <div className="flexCenter px-4 h-full border-dashed border-gray border-2 rounded-lg">
                    <Text
                      value={`설정한\n주요 선수가\n없어요!`}
                      type="s_regular"
                      extraStyle="text-center whitespace-pre-wrap	leading-5"
                    />
                  </div>
                ) : (
                  playerList.map(({ id, name, position }) => {
                    return (
                      <PlayerCard key={id} position={position} name={name} />
                    );
                  })
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <Text value="최근 경기" type="s_regular" />
            <ul className="py-4 w-full overflow-x-scroll scrollBarHide">
              <div className="flex gap-4 px-4 w-max">
                {['win', 'draw', 'lose'].map((el) => {
                  return <MatchResultCard key={el} result={el} />;
                })}
              </div>
            </ul>
          </div>
        </div>
        <Divider />

        <div className="flex flex-col mt-4">
          <SubTitleBox title="다가올 매치" />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </div>
      </section>
      <ModalLayout isOpen={isOpenModal} closeAction={handleTeamInfo}>
        <TeamInfoModal
          formationList={formationList}
          playerList={playerList}
          setFormationList={setFormationList}
          setPlayerList={setPlayerList}
          close={handleTeamInfo}
        />
      </ModalLayout>
    </PageLayout>
  );
};

export default TeamDetail;
