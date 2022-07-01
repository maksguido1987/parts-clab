import React from 'react';
import { AccardeonArrow } from '../../icons';

interface IProps {
  onClick: (e: React.MouseEvent) => void;
  isHorizontal: boolean;
}

export const AnalogsBtn: React.FC<IProps> = ({ onClick, isHorizontal }) => {
  return (
    <div
      className={`${
        isHorizontal ? 'sm:h-[42px]' : ''
      } border border-gray-200 hover:border-green transition rounded-md h-9 px-2 lg:px-3 flex items-center cursor-pointer whitespace-nowrap`}
      onClick={onClick}
    >
      <span className='text-xs sm:text-sm mr-1 md:mr-2'>20 аналогов</span>
      <AccardeonArrow className='-rotate-90' width={14} height={14} />
    </div>
  );
};
