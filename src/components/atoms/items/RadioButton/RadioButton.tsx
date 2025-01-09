import React from 'react';

interface Props {
  title: string;
  type: string;
  value: string;
  selectValue: string;
  clickButton: (name: string, value: string) => void;
}

const RadioButton = ({
  title,
  type,
  value,
  selectValue,
  clickButton,
}: Props) => {
  return (
    <label
      className="flex gap-1 items-center"
      onClick={() => clickButton(type, value)}
    >
      <input
        type="radio"
        name={type}
        value={title}
        checked={selectValue === value}
        className="border-2 border-solid border-gray text-sm"
        onChange={() => clickButton(type, value)}
      />
      {title}
    </label>
  );
};

export default RadioButton;
