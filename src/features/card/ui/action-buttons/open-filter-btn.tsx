import React from 'react';
import filterBtnIcon from '../../../../../public/img/buttons-img/open-filter.svg';
import { Button } from '../../../../entities';

interface IProps {
  /** Количество применённых фильтров */
  filters: number;
  /** Функция изменения состояния блока фильтров */
  onSetIsOpenFilter: () => void;
}

export const OpenFilterBtn: React.FC<IProps> = React.memo(
  ({ onSetIsOpenFilter, filters }) => {

    /** Возвращает бейджик над кнопкой открывания фильтра. Показывает количество примененных фильтров */
    const showFiltersCount = () => {
      if (filters <= 0) return null;
      return (
        <span className='w-5 h-5 absolute p-1 -top-2.5 -right-2.5 rounded-full flex items-center justify-center bg-green text-white text-10px lg:hidden'>
          {filters}
        </span>
      );
    };

    return (
      <div className='relative w-full'>
        <Button
          size='actions-bar-btn'
          color='gray'
          name='Фильтры'
          onClick={onSetIsOpenFilter}
          className='w-full'
          isImage
          src={filterBtnIcon}
          alt='filter-btn'
        />
        {showFiltersCount()}
      </div>
    );
  }
);

OpenFilterBtn.displayName = 'OpenFilterBtn';
