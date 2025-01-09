const getYearList = () => {
  const yearArr = [];

  const day = new Date();
  const year = day.getFullYear();

  for (let i = 1980; i <= year; i++) {
    yearArr.push(`${i}`);
  }

  return yearArr;
};

export default getYearList;
