import React from 'react';

interface Props {
  type: string;
}

const Record = ({ type }: Props) => {
  const recordStyle: { [key: string]: string } = {
    win: 'bg-primary',
    draw: 'bg-gray-400',
    lose: 'bg-danger',
  };

  return <div className={`${recordStyle[type]} rounded-full w-4 h-4`} />;
};

export default Record;
