import React from 'react';
import { CrownIcon } from '../../icons';

interface IProps {
  /** Флаг, если true - используем лейбл с текстом, иначе просто иконка */
  isText?: boolean;
  className?: string;
}

export const TopSellerLabel: React.FC<IProps> = ({ isText, className }) => {
  return (
    <div
      className={`${
        className ? className : ''
      } px-1.5 py-0.5 bg-blue rounded-sm sm:rounded-[4px] flex items-center`}
    >
      <CrownIcon className={`${isText ? 'w-3 h-3' : 'w-[10px] sm:w-[14px] h-[10px] sm:h-[14px]'}`} />
      {isText && (
        <span className='text-white ml-1.5'>Рекомендованный продавец</span>
      )}
    </div>
  );
};
