import React from 'react';

interface IProps {
  text: string;
  className?: string;
}

export const InputError: React.FC<IProps> = ({ text, className }) => {
  return (
    <small
      className={`${
        className ? className : ''
      } absolute -bottom-4 left-2 text-[10px] text-red-500`}
    >
      * {text}
    </small>
  );
};
