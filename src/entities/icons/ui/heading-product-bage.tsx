import React from 'react';
import { IconType } from '../lib/type';

export const HeadingProductBage: React.FC<IconType> = ({ className }) => {
  return (
    <div className='px-2 py-1 cursor-pointer group'>
      <svg
        width='20'
        height='4'
        viewBox='0 0 20 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`${className ? className : ''} transition`}
      >
        <circle
          cx='2'
          cy='2'
          r='1.5'
          stroke='#5DC563'
        />
        <circle
          cx='10'
          cy='2'
          r='1.5'
          stroke='#5DC563'
        />
        <circle
          cx='18'
          cy='2'
          r='1.5'
          stroke='#5DC563'
        />
      </svg>
    </div>
  );
};
