import React from 'react';
import { IconType } from '../lib/type';

export const Dott: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      width='4'
      height='4'
      viewBox='0 0 4 4'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className ? className : ''}`}
    >
      <circle cx='2' cy='2' r='2' fill='#C4C4C4' />
    </svg>
  );
};
