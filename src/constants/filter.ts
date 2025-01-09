export const LOCATION_LIST = ['서울', '경기'];
export const CITY_LIST: { [key: string]: string[] } = {
  서울: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ],
  경기: [
    '수원시',
    '고양시',
    '용인시',
    '화성시',
    '성남시',
    '부천시',
    '남양주시',
    '평택시',
    '고민시',
    '안산시',
    '안양시',
    '시흥시',
    '파주시',
    '의정부시',
  ],
};
export const DAY_LIST = ['월', '화', '수', '목', '금', '토', '일'];
export const TIME_LIST = ['6-12', '12-18', '18-24'];
export const ETC_FILTER_LIST = [
  {
    id: 1,
    name: 'gender',
    list: [
      { title: '남자', value: 'man' },
      { title: '여자', value: 'woman' },
      { title: '혼성', value: 'all' },
    ],
  },
  {
    id: 2,
    name: 'type',
    list: [
      { title: '축구', value: 'soccer' },
      { title: '풋살', value: 'futsal' },
      { title: '모두', value: 'all' },
    ],
  },
  {
    id: 3,
    name: 'needMember',
    list: [
      { title: '모집 중', value: 'yes' },
      { title: '모집 중단', value: 'no' },
    ],
  },
];
