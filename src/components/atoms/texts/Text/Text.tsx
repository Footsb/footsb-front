import React from 'react';

interface Props {
  value: string;
  type: string;
  extraStyle?: string;
}

const Text = ({ value, type, extraStyle = '' }: Props) => {
  const textStyle: { [key: string]: string } = {
    xs_regular: 'text-xs font-medium',
    xs_bold: 'text-xs font-bold',
    s_regular: 'text-sm font-medium',
    s_bold: 'text-sm font-bold',
    m_regular: 'text-base font-medium',
    m_bold: 'text-base font-bold',
    l_regular: 'text-xl font-medium',
    l_bold: 'text-xl font-bold',
    xl_regular: 'text-2xl font-medium',
    xl_bold: 'text-2xl font-bold',
    '2xl_bold': 'text-4xl font-bold',
  };

  return (
    <div
      className={`${textStyle[type]} ${extraStyle} leading-none text-balance`}
    >
      {value}
    </div>
  );
};

export default Text;
