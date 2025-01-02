import React from 'react';

interface Props {
  title: string;
  type: string;
  queryKey?: string;
  clickButton: (key: string, value: string) => void;
}

const RadioButton = ({ title, type, queryKey = '', clickButton }: Props) => {
  return (
    <label
      className="flex gap-1 items-center"
      onClick={() => clickButton(queryKey, title)}
    >
      <input
        type="radio"
        name={type}
        value={title}
        className="border-2 border-solid border-gray"
      />
      {title}
    </label>
  );
};

export default RadioButton;
