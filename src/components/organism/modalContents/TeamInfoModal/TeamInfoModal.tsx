import { Dispatch, SetStateAction, useState } from 'react';

import { Toast } from '@/components/atoms';
import { Cta } from '@/components/atoms/buttons';
import { ChooseCard } from '@/components/atoms/items';
import { Text } from '@/components/atoms/texts';
import { FORMATION_LIST, PLAYER_LIST_TEST } from '@/constants/list';
import { FormationInfo, PlayerSimpleInfo } from '@/types/team';

interface Props {
  formationList: FormationInfo[];
  playerList: PlayerSimpleInfo[];
  setFormationList: Dispatch<SetStateAction<FormationInfo[]>>;
  setPlayerList: Dispatch<SetStateAction<PlayerSimpleInfo[]>>;
  close: () => void;
}

const TeamInfoModal = ({
  formationList,
  playerList,
  setFormationList,
  setPlayerList,
  close,
}: Props) => {
  const [selectFormation, setSelectFormation] =
    useState<FormationInfo[]>(formationList);
  const [selectPlayer, setSelectPlayer] =
    useState<PlayerSimpleInfo[]>(playerList);

  const toggleFormation = (formation: FormationInfo) => {
    if (selectFormation.filter((el) => el.id === formation.id).length > 0) {
      const newArr = selectFormation.filter((el) => el.id !== formation.id);
      setSelectFormation(newArr);
    } else {
      if (selectFormation.length === 3) {
        Toast('error', '3명 이상 등록할 수 없어요!');
      } else {
        setSelectFormation((prev) => [...prev, formation]);
      }
    }
  };

  const togglePlayer = (player: PlayerSimpleInfo) => {
    if (selectPlayer.filter((el) => el.id === player.id).length > 0) {
      const newArr = selectPlayer.filter((el) => el.id !== player.id);
      setSelectPlayer(newArr);
    } else {
      if (selectPlayer.length === 3) {
        Toast('error', '3명 이상 등록할 수 없어요!');
      } else {
        setSelectPlayer((prev) => [...prev, player]);
      }
    }
  };

  const confirmChange = () => {
    setFormationList(selectFormation);
    setPlayerList(selectPlayer);
    close();
  };

  return (
    <div className="text-black w-full">
      <Text value="팀 정보 변경하기" type="l_bold" />
      <div className="grid grid-cols-2 my-4 gap-2">
        <div>
          <Text
            value="주 포메이션"
            type="s_regular"
            extraStyle="mb-3 text-center"
          />
          <div className="flex flex-col gap-2 pb-7 max-h-[220px] overflow-scroll scrollBarHide">
            {FORMATION_LIST.map((el) => {
              const { id, formation } = el;

              const isSelected =
                selectFormation.filter((el) => el.id === id).length > 0;

              return (
                <ChooseCard
                  key={id}
                  formation={formation}
                  type="modal"
                  onSelect={() => {
                    toggleFormation(el);
                  }}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        </div>
        <div>
          <Text
            value="키 플레이어"
            type="s_regular"
            extraStyle="mb-3 text-center"
          />
          <div className="flex flex-col gap-2 pb-7 max-h-[220px] overflow-scroll scrollBarHide">
            {PLAYER_LIST_TEST.map((player) => {
              const { id, name, position } = player;

              const isSelected =
                selectPlayer.filter((el) => el.id === id).length > 0;

              return (
                <ChooseCard
                  key={id}
                  name={name}
                  position={position}
                  isSelected={isSelected}
                  type="modal"
                  onSelect={() => togglePlayer(player)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flexBetweenCenter">
        <Cta
          value="취소"
          style="link"
          color="danger"
          size="s"
          clickAction={close}
        />
        <Cta
          value="변경"
          style="link"
          color="primary"
          size="s"
          clickAction={confirmChange}
        />
      </div>
    </div>
  );
};

export default TeamInfoModal;
