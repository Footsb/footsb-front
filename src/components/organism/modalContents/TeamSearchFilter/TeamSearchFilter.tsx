import { useState } from 'react';
import { Divider } from '@/components/atoms';
import { FilterButton, RadioButton } from '@/components/atoms/items';
import { Text } from '@/components/atoms/texts';
import { Cta } from '@/components/atoms/buttons';
import { DropDown } from '@/components/molecules';

import {
  CITY_LIST,
  DAY_LIST,
  ETC_FILTER_LIST,
  LOCATION_LIST,
  TIME_LIST,
} from '@/constants/filter';

interface Props {
  close: () => void;
}

const TeamSearchFilter = ({ close }: Props) => {
  const [selectFilterList, setSelectFilterList] = useState<{
    [key: string]: string[];
  }>({
    location: ['', ''],
    day: [],
    time: [],
    etc: [],
  });

  const onSeletedLocation = (idx: number, value: string) => {
    const newArr = [...selectFilterList.location];

    if (idx === 0 && newArr[1] !== '') {
      newArr[1] = '';
    }

    newArr[idx] = value;

    setSelectFilterList((prev) => ({ ...prev, location: newArr }));
  };

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
          <DropDown
            idx={0}
            list={LOCATION_LIST}
            placeholder="시/도"
            selectValue={selectFilterList.location[0]}
            onSelect={onSeletedLocation}
          />
          <DropDown
            idx={1}
            list={CITY_LIST[selectFilterList.location[0]]}
            placeholder="군/시"
            selectValue={selectFilterList.location[1]}
            disabled={selectFilterList.location[0] === ''}
            onSelect={onSeletedLocation}
          />
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
