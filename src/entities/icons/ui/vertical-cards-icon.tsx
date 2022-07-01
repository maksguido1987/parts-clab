import React from 'react';
import { IconType } from '../lib/type';

export const VerticalCardsIcon: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className ? className : ''}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 0H0V5H5V0ZM16 0H11V5H16V0ZM11 11H16V16H11V11ZM5 11H0V16H5V11Z'
      />
    </svg>
  );
};
