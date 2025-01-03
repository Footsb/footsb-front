import { Dispatch, SetStateAction, useState } from 'react';

import { Cta, Toast } from '@/components/atoms';
import { FormationCard, PlayerCard } from '@/components/atoms/items';
import { Text } from '@/components/atoms/texts';
import { FORMATION_LIST, PLAYER_LIST_TEST } from '@/constants/list';
import { PlayerSimpleInfo } from '@/types/team';

interface Props {
  formationList: string[];
  playerList: PlayerSimpleInfo[];
  setFormationList: Dispatch<SetStateAction<string[]>>;
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
    useState<string[]>(formationList);
  const [selectPlayer, setSelectPlayer] =
    useState<PlayerSimpleInfo[]>(playerList);

  const toggleFormation = (formation: string) => {
    if (selectFormation.includes(formation)) {
      const newArr = [...selectFormation];
      newArr.splice(selectFormation.indexOf(formation), 1);
      setSelectFormation(newArr);
    } else {
      if (selectFormation.length === 3) {
        Toast('error', '3개 이상 등록할 수 없어요!');
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
              const isSelected = selectFormation.includes(el);

              return (
                <FormationCard
                  key={el}
                  formation={el}
                  type="modal"
                  onSelect={toggleFormation}
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
                <PlayerCard
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
