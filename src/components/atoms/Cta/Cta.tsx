import React from 'react';

interface Props {
  type: string;
  value: string;
  clickAction: () => void;
}

const Cta = ({ value, type, clickAction }: Props) => {
  const ctaStyleList: { [key: string]: string } = {
    confirm: 'bg-primary',
  };

  return (
    <button
      onClick={clickAction}
      className={`${ctaStyleList[type]} px-4 py-2 rounded-md font-bold transition-all hover:scale-105`}
    >
      {value}
    </button>
  );
};

export default Cta;
