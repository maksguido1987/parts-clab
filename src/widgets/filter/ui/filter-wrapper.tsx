import React, { ReactNode } from 'react';
import { Filter } from './filter';

interface IProps {
  /** Флаг. false - фильтры не отображаются, true - отображаются (на разрешении < 1024px) */
  isOpenFilter: boolean;
  /** Функция для закрытия блока фильтров */
  onClick: () => void;
  /** Дочерний компонент */
  children: ReactNode;
}

export const FilterWrapper: React.FC<IProps> = React.memo(
  ({ isOpenFilter, onClick, children }) => {
    return (
      <div className='flex items-start pt-5'>
        <div
          className={`${
            isOpenFilter ? 'lg:block' : 'hidden'
          } lg:basis-1/4 lg:static absolute z-10 w-full right-0 top-40 lg:mr-5`}
        >
          <Filter onClick={onClick} isOpenFilter={isOpenFilter} />
        </div>
        {children}
      </div>
    );
  }
);

FilterWrapper.displayName = 'FilterWrapper';
