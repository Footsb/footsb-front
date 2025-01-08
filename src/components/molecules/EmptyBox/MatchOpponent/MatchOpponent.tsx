import React from 'react';

import { Cta } from '@/components/atoms/buttons';
import { Text } from '@/components/atoms/texts';

const MatchOpponent = () => {
  const hasOppList = false;
  return (
    <>
      {hasOppList ? (
        <div>
          <Text value="매치 신청 리스트" type="l_bold" />
          <ul className="flex flex-col gap-4 my-4">
            {[1, 2, 3].map((el) => {
              return (
                <li
                  className="flexBetweenCenter p-3 grayborder block h-[110px]"
                  key={el}
                >
                  <div className="flex flex-col justify-around h-full">
                    <Text value={'한마음 조기 축구회'} type="m_bold" />
                    <div className="flex items-center gap-4">
                      <Text value={'실력 : 하하'} type="s_regular" />
                      <Text value={'매너도 : 120점'} type="s_regular" />
                      <Text value={'선출 : 2명'} type="s_regular" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Cta
                      value="팀 보러 가기"
                      style="solid"
                      color="primary"
                      size="s"
                      clickAction={() => {}}
                    />
                    <Cta
                      value="매치 수락"
                      style="solid"
                      color="info"
                      size="s"
                      extraStyle="w-full"
                      clickAction={() => {}}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flexCenter">
            <Cta
              value="팀 초대하기"
              style="solid"
              color="accent"
              size="s"
              clickAction={() => {}}
            />
          </div>
        </div>
      ) : (
        <div className="flexCenter flex-col gap-6 h-[300px] emptyBoxBorder">
          <Text value="상대를 기다리고 있어요!" type="l_bold" />
          <Cta
            value="매칭 신청"
            style="solid"
            color="accent"
            size="s"
            clickAction={() => {}}
          />
        </div>
      )}
    </>
  );
};

export default MatchOpponent;
