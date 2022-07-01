import React from 'react';
import { AccardeonArrow } from '../../icons';

interface IProps {
  onClick: (e: React.MouseEvent) => void;
}

export const DetailedBtn: React.FC<IProps> = ({ onClick }) => {
  return (
    <div
      className='border border-green transition rounded-md h-9 sm:h-[42px] px-3 flex items-center cursor-pointer'
      onClick={onClick}
    >
      <span className='text-xs sm:text-sm mr-2 text-green'>Подробнее</span>
      <AccardeonArrow className='-rotate-90' width={14} height={14} color='#5DC563' />
    </div>
  );
};
