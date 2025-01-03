import { Cta, Divider } from '@/components/atoms';
import { FilterButton, RadioButton } from '@/components/atoms/items';
import { Text } from '@/components/atoms/texts';
import { useState } from 'react';
import { TbCaretDownFilled } from 'react-icons/tb';

interface Props {
  close: () => void;
}

const TeamSearchFilter = ({ close }: Props) => {
  const [clickDrop, setClickDrop] = useState(false);
  const [selectFilterList, setSelectFilterList] = useState<{
    [key: string]: string[];
  }>({
    day: [],
    time: [],
    etc: [],
  });

  const onClickFilterBtn = (key: string, value: string) => {
    const selectFilterArr = selectFilterList[key];

    if (selectFilterArr.includes(value)) {
      selectFilterArr.splice(selectFilterArr.indexOf(value), 1);
      setSelectFilterList((prev) => ({ ...prev, [key]: selectFilterArr }));
    } else {
      selectFilterArr.push(value);
      setSelectFilterList((prev) => ({ ...prev, [key]: selectFilterArr }));
    }
  };

  return (
    <div className="flex flex-col gap-2 max-h-[350px] overflow-scroll">
      <div>
        <Text value="지역" type="m_regular" />
        <div className="flex gap-2 mt-4">
          <div
            className="flexBetweenCenter w-24 py-1 px-2 border-[1px] border-solid border-gray rounded-sm"
            onClick={() => setClickDrop((prev) => !prev)}
          >
            <Text value="지역" type="s_regular" />
            <div
              className={`${
                clickDrop ? 'rotate-0' : 'rotate-180'
              } transition-all`}
            >
              <TbCaretDownFilled />
            </div>
          </div>
          <div
            className="flexBetweenCenter w-24 py-1 px-2 border-[1px] border-solid border-gray rounded-sm"
            onClick={() => setClickDrop((prev) => !prev)}
          >
            <Text value="구/군" type="s_regular" />
            <div
              className={`${
                clickDrop ? 'rotate-0' : 'rotate-180'
              } transition-all`}
            >
              <TbCaretDownFilled />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <Text value="요일" type="m_regular" />
        <div className="flex flex-wrap gap-4 mt-4">
          {DAY_LIST.map((day) => {
            return (
              <FilterButton
                key={day}
                title={day}
                queryKey="day"
                selectFilterList={selectFilterList}
                clickButton={onClickFilterBtn}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div>
        <Text value="시간" type="m_regular" />
        <div className="flex flex-wrap gap-4 mt-4">
          {TIME_LIST.map((el) => {
            return (
              <FilterButton
                key={el}
                title={el}
                queryKey="time"
                selectFilterList={selectFilterList}
                clickButton={onClickFilterBtn}
              />
            );
          })}
        </div>
      </div>
      <Divider />
      <div>
        <Text value="기타" type="m_regular" />
        {ETC_FILTER_LIST.map((list) => {
          return (
            <form className="flex flex-wrap gap-4 mt-4" key={list.id}>
              {list.title.map((text) => {
                return (
                  <RadioButton
                    title={text}
                    type={list.type}
                    queryKey="etc"
                    key={text}
                    clickButton={onClickFilterBtn}
                  />
                );
              })}
            </form>
          );
        })}
      </div>

      <div className="flexBetweenCenter mt-4">
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
          clickAction={() => {}}
        />
      </div>
    </div>
  );
};

export default TeamSearchFilter;

const DAY_LIST = ['월', '화', '수', '목', '금', '토', '일'];
const TIME_LIST = ['6-12', '12-18', '18-24'];
const ETC_FILTER_LIST = [
  { id: 1, type: 'gender', title: ['남자만', '여자만', '혼성'] },
  { id: 2, type: 'type', title: ['축구', '풋살'] },
  { id: 3, type: 'member', title: ['팀원 모집 중'] },
];
