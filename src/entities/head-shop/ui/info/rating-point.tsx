import React from 'react';
import { RatingBar } from '../../../rating-bar';

export interface IRatingPointProps {
  title: string;
  done: number;
  children?: React.ReactNode;
}

export const RatingPoint: React.FC<IRatingPointProps> = ({ title, done, children }) => {
  return (
    <div className='mb-3.5 sm:mb-5 last:mb-0'>
      <div className='flex justify-between'>
        <div className='text-xs sm:text-base max-w-[110px] sm:max-w-full'>{title}</div>
        <div>
          <RatingBar className='w-28' done={done} />
        </div>
      </div>
      {children}
    </div>
  );
};
