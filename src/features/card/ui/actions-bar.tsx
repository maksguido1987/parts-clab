import React from 'react';
import { SortDropdown } from '../../../entities';
import { OpenFilterBtn, CardsPosition } from './action-buttons';

interface IProps {
  /** Количество найденых товаров */
  // offersCount: number;
  /** Состояние отображения карточек товара (плитка либо строка) */
  isHorizontal: boolean;
  /** Функция изменения состояния отображения карточек на горизонтальное отображение */
  onSetIsHorisontal: (value: boolean) => void;
  /** Функция изменения состояния отображения карточек на вертикальное отображение */
  onSetIsVertical: (value: boolean) => void;
  /** Функция изменения состояния блока фильтров */
  onSetIsOpenFilter: () => void;
  children: React.ReactNode;
}

export const ActionsBar: React.FC<IProps> = React.memo(
  ({
    isHorizontal,
    onSetIsHorisontal,
    onSetIsVertical,
    onSetIsOpenFilter,
    children,
  }) => {
    return (
        <div className='flex items-center justify-between py-6 border-t border-b border-gray-100'>
          {children}
          <div className='flex'>
            <div className='sm:w-32 w-24 sm:mr-5 mr-2.5'>
              <OpenFilterBtn
                onSetIsOpenFilter={onSetIsOpenFilter}
                filters={24}
              />
            </div>
            <div className='sm:w-36 sm:mr-5'>
              <SortDropdown />
            </div>
            <div className='sm:block hidden'>
              <CardsPosition
                isHorizontal={isHorizontal}
                onSetIsHorisontal={onSetIsHorisontal}
                onSetIsVertical={onSetIsVertical}
              />
            </div>
          </div>
        </div>
    );
  }
);

ActionsBar.displayName = 'ActionsBar';
