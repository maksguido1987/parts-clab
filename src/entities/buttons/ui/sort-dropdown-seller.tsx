import React from 'react';
import { useClickOutside, useToggle } from '../../../shared/lib';
import { Dropdown } from '../../base-components';
import { FilterCheckboxGroup, FilterInputText } from '../../filter-elements';
import { Button } from './button';
import arrowBtnIcon from '../../../../public/img/buttons-img/black-arrow.svg';
import { checkboxGroupSeller } from '../../../features';

interface IProps {
  searchBrand: string;
  setSearchBrand: (value: string) => void;
}

export const SortDropdownSeller: React.FC<IProps> = React.memo(
  ({ searchBrand, setSearchBrand }) => {
    const [openSort, setOpenSort] = useToggle();

    /** Открытие закрытие выпадающего меню сортировки */
    const onSetOpenSort = () => {
      openSort && setOpenSort();
    };

    /** Закрывает меню при клике вне его */
    const sortMenuRef = useClickOutside(onSetOpenSort);

    return (
      <Dropdown ref={sortMenuRef} isOpen={openSort}>
        <Button
          size='actions-bar-btn'
          color='gray'
          name='Продавец'
          onClick={setOpenSort}
          className='w-[137px]'
          isImage
          src={arrowBtnIcon}
          alt='sort-btn'
        />
        <div className='px-5 w-56'>
          <FilterInputText
            inputValue={searchBrand}
            placeholder='Поиск по брендам...'
            onChange={(value: string) => setSearchBrand(value)}
          />
          <FilterCheckboxGroup checkboxGroupData={checkboxGroupSeller} />
        </div>
      </Dropdown>
    );
  }
);

SortDropdownSeller.displayName = 'SortDropdownSeller';
