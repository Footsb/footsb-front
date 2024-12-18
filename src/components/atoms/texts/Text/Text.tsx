import React from 'react';

interface Props {
  value: string;
  type: string;
}

const Text = ({ value, type }: Props) => {
  const textStyle: { [key: string]: string } = {
    s_regular: 'text-sm font-medium',
    s_bold: 'text-sm font-bold',
    m_regular: 'text-lg font-medium',
    m_bold: 'text-lg font-bold',
    l_regular: 'text-2xl font-medium',
    l_bold: 'text-2xl font-bold',
  };

  return <div className={`${textStyle[type]} leading-none`}>{value}</div>;
};

export default Text;
