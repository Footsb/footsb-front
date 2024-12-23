'use client';

import React from 'react';

interface Props {
  style: string;
  color: string;
  value: string;
  size?: string;
  clickAction: () => void;
}

const Cta = ({ value, style, color, size = 'm', clickAction }: Props) => {
  const ctaStyleList: { [key: string]: string } = {
    solid_primary: 'bg-primary text-white transition-all hover:scale-105',
    solid_info: 'bg-info text-white transition-all hover:scale-105',
    solid_default: 'bg-white text-black transition-all hover:scale-105',

    outline_primary:
      'border-2 border-solid border-primary text-primary bg-transparent',
    outline_info: 'border-2 border-solid border-info text-info bg-transparent',
    outline_default:
      'border-2 border-solid border-white text-white bg-transparent',

    link_primary: 'bg-transparent text-primary',
    link_info: 'bg-transparent text-info',
    link_default: 'bg-transparent text-white',
  };

  const ctaSizeList: { [key: string]: string } = {
    s: 'px-3 py-2 w-fit text-sm',
    m: 'px-4 py-2 w-[120px] text-base',
    l: '',
  };

  return (
    <button
      onClick={clickAction}
      className={`${ctaStyleList[`${style}_${color}`]} ${
        ctaSizeList[size]
      } rounded-md font-bold`}
    >
      {value}
    </button>
  );
};

export default Cta;
