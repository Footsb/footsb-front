'use client';

import React from 'react';

interface Props {
  style: string;
  color: string;
  value: string;
  size?: string;
  extraStyle?: string;
  clickAction: () => void;
}

const Cta = ({
  value,
  style,
  color,
  size = 'm',
  extraStyle = '',
  clickAction,
}: Props) => {
  const ctaStyleList: { [key: string]: string } = {
    solid_primary:
      'border-2 border-solid border-primary bg-primary text-white transition-all hover:scale-105',
    solid_danger:
      'border-2 border-solid border-danger bg-danger text-white transition-all hover:scale-105',
    solid_accent:
      'border-2 border-solid border-accent bg-accent text-white transition-all hover:scale-105',
    solid_info:
      'border-2 border-solid border-info bg-info text-white transition-all hover:scale-105',
    solid_default:
      'border-2 border-solid border-black bg-black text-white transition-all hover:scale-105',

    outline_primary:
      'border-2 border-solid border-primary text-primary bg-transparent',
    outline_danger:
      'border-2 border-solid border-danger text-danger bg-transparent',
    outline_accent:
      'border-2 border-solid border-accent text-accent bg-transparent',
    outline_info: 'border-2 border-solid border-info text-info bg-transparent',
    outline_default:
      'border-2 border-solid border-black text-black bg-transparent',

    link_primary: 'bg-transparent text-primary',
    link_danger: 'bg-transparent text-danger',
    link_accent: 'bg-transparent text-accent',
    link_info: 'bg-transparent text-info',
    link_default: 'bg-transparent text-black',
  };

  const ctaSizeList: { [key: string]: string } = {
    s: 'px-2 py-1 w-fit text-sm',
    m: 'px-3 py-2 w-[120px] text-base',
    l: '',
  };

  return (
    <button
      onClick={clickAction}
      className={`${ctaStyleList[`${style}_${color}`]} ${
        ctaSizeList[size]
      } ${extraStyle} rounded-md font-bold`}
    >
      {value}
    </button>
  );
};

export default Cta;
