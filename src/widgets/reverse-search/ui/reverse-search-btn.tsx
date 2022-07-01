import React from 'react';
import { AccardeonArrow } from '../../../entities';

interface IProps {
  /** Название категории поиска */
  categoryTitle: string;
  /** Состояние отображения кнопки показа всех категорий */
  isAllCategories: boolean;
  /** Функция, выполняемая по нажатию кнопки */
  onClick: () => void;
}

export const ReverseSearchBtn: React.FC<IProps> = React.memo(({
  isAllCategories,
  onClick,
  categoryTitle,
}) => {

  return (
    <div className='inline-block float-right border-b border-dotted border-green cursor-pointer ml-10'>
      <div className='flex items-center text-sm' onClick={onClick}>
        <span className='pr-2'>{categoryTitle}</span>
        <div className={`${isAllCategories ? 'rotate-180' : ''} transition`}>
          <AccardeonArrow className='w-4 h-4' />
        </div>
      </div>
    </div>
  );
});

ReverseSearchBtn.displayName = 'ReverseSearchBtn';
