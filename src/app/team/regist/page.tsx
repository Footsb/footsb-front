'use client';

import { useRef, useState } from 'react';

import { Toast } from '@/components/atoms';
import { Text } from '@/components/atoms/texts';
import { RadioButton } from '@/components/atoms/items';
import Filter from '@/components/atoms/tags/Filter';
import { DropDown, SubTitleBox } from '@/components/molecules';
import { PageLayout } from '@/components/organism/common';

import getYearList from '@/utils/getYearList';
import { CITY_LIST, ETC_FILTER_LIST, LOCATION_LIST } from '@/constants/filter';
import { Cta } from '@/components/atoms/buttons';

const YEAR_LIST = getYearList();

const Regist = () => {
  const [curOpenDropDown, setCurOpenDropDown] = useState('');
  const [teamInfo, setTeamInfo] = useState<{ [key: string]: string }>({
    year: '',
    location: '',
    city: '',
    gender: 'man',
    type: 'soccer',
    needMember: 'yes',
  });
  const [locationList, setLocationList] = useState<string[]>([]);

  const imgUploadRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    imgUploadRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Uploaded file:', file.name);
    }
  };

  const toggleDropDown = (state: string) => {
    setCurOpenDropDown(state);
  };

  const selecOption = (name: string, value: string) => {
    if (name === 'location' && teamInfo.city !== '') {
      setTeamInfo((prev) => ({ ...prev, location: value, city: '' }));
    }

    if (name === 'city') {
      const locationName = `${teamInfo.location} ${value}`;

      if (locationList.includes(locationName)) {
        Toast('error', '이미 등록한 지역입니다');
        return;
      }

      if (locationList.length === 3) {
        Toast('error', '3개 지역 이상 등록할 수 없습니다');
        return;
      }

      const newArr = [...locationList];
      newArr.push(locationName);

      setLocationList(newArr);
      setTeamInfo((prev) => ({ ...prev, location: '', city: '' }));
      return;
    }

    setTeamInfo((prev) => ({ ...prev, [name]: value }));
  };

  const deleteLocation = (value: string) => {
    const newArr = [...locationList];
    newArr.splice(locationList.indexOf(value), 1);
    setLocationList(newArr);
  };

  return (
    <PageLayout>
      <section className="p-4">
        <SubTitleBox title="팀 등록" />
        <div
          className="flexCenter emptyBoxBorder mt-4 h-[200px]"
          onClick={handleButtonClick}
        >
          우리 팀의 대표 사진을 등록해주세요
        </div>
        <input
          type="file"
          className="hidden"
          ref={imgUploadRef}
          onChange={handleFileChange}
        />
        <div className="grid grid-cols-[80px_1fr] gap-3 mt-4 w-full items-center text-center">
          <Text value="팀 명" type="m_bold" />
          <input
            type="text"
            className="grayBorder px-2 py-1 w-full focus:outline-none text-sm"
            placeholder="10자 이내로 작성해주세요"
            maxLength={10}
          />
          <Text value="한 줄 소개" type="m_bold" />
          <input
            type="text"
            className="grayBorder px-2 py-1 w-full focus:outline-none text-sm"
            placeholder="30자 이내로 작성해주세요"
            maxLength={30}
          />
          <Text value="상세 소개" type="m_bold" />
          <textarea
            className="grayBorder px-2 py-1 w-full h-[100px] focus:outline-none text-sm"
            placeholder="100자 이내로 작성해주세요"
            maxLength={100}
          />
          <Text value="창단년도" type="m_bold" />
          <DropDown
            name="year"
            list={YEAR_LIST}
            placeholder="연도 선택"
            selectValue={teamInfo.year}
            curDropDown={curOpenDropDown}
            handleDropDown={toggleDropDown}
            onSelect={selecOption}
          />
          <Text value="활동 지역" type="m_bold" />
          <div className="flex gap-2">
            <DropDown
              name="location"
              list={LOCATION_LIST}
              placeholder="시/도"
              selectValue={teamInfo.location}
              curDropDown={curOpenDropDown}
              handleDropDown={toggleDropDown}
              onSelect={selecOption}
            />
            <DropDown
              name="city"
              list={CITY_LIST[teamInfo.location]}
              placeholder="군/시"
              selectValue={teamInfo.city}
              disabled={teamInfo.location === ''}
              curDropDown={curOpenDropDown}
              handleDropDown={toggleDropDown}
              onSelect={selecOption}
            />
          </div>
          <div />
          <div className="flex gap-x-2 gap-y-1 flex-wrap">
            {locationList.map((list) => {
              return (
                <Filter value={list} key={list} deleteAction={deleteLocation} />
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-[80px_1fr] gap-3 w-full items-center text-center">
          <Text value="기타" type="m_bold" />
          <div className="flex flex-col gap-2">
            {ETC_FILTER_LIST.map((el) => {
              return (
                <form className="flex flex-wrap gap-4" key={el.id}>
                  {el.list.map(({ title, value }) => {
                    return (
                      <RadioButton
                        title={title}
                        type={el.name}
                        value={value}
                        selectValue={teamInfo[el.name]}
                        key={title}
                        clickButton={selecOption}
                      />
                    );
                  })}
                </form>
              );
            })}
          </div>
        </div>
      </section>
      <div className="p-4 mt-4">
        <Cta
          value="등록하기"
          style="solid"
          color="primary"
          size="l"
          clickAction={() => {}}
        />
      </div>
    </PageLayout>
  );
};

export default Regist;
