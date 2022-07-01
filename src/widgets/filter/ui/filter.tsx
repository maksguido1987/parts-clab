import Image from 'next/image';
import {
  FilterSeller,
  FilterBrand,
  FilterPrice,
  FilterType,
  FilterLength,
  FilterHeight,
  FilterWidth,
} from '../../../features/filter-components';
import closeFilter from '../../../../public/img/close-filter.svg';
import { Button, DisplayingFilters } from '../../../entities';
import { useClickOutside } from '../../../shared/lib';
import { filterData } from '../../../entities/displaying-filters/lib/filter-data';
import React from 'react';

interface IProps {
  /** Функция переключения состояния отображения filter */
  onClick: () => void;
  /** Состояние, закрыт либо открыт фильтр. Для функции закрытия при клике вне фильтра */
  isOpenFilter: boolean;
}

export const Filter: React.FC<IProps> = React.memo(
  ({ onClick, isOpenFilter }) => {
    // const onCloseFilter = () => {
    //   isOpenFilter && onClick();
    // };

    // const filterRef = useClickOutside(onCloseFilter);

    return (
      <div className='min-w-[260px]'>
        <div className='lg:hidden flex justify-between items-center bg-gradient-to-r from-blue-light to-blue px-4 py-4 w-full'>
          <span className='text-white'>Фильтры</span>
          <Image
            src={closeFilter}
            alt='close filter'
            width={14}
            height={14}
            className='cursor-pointer'
            onClick={onClick}
          />
        </div>
        <div className='bg-gray-50 border border-gray-100 p-5'>
          {filterData.length > 0 && (
            <div className='lg:hidden pt-2.5'>
              <DisplayingFilters filterData={filterData} />
            </div>
          )}
          <FilterSeller />
          <FilterBrand />
          <FilterPrice />
          <FilterType />
          <FilterLength />
          <FilterHeight />
          <FilterWidth />
          <Button
            name='Показать всё'
            size='small-btn'
            onClick={() => console.log('показать всё')}
            className='w-full text-sm mb-3.5'
          />
          <div className='border-b-2 border-dashed border-green mx-auto cursor-pointer max-w-min group'>
            <button className='text-sm group-hover:text-gray-500 outline-none'>
              Подобрать
            </button>
          </div>
        </div>
      </div>
    );
  }
);

Filter.displayName = 'Filter';
