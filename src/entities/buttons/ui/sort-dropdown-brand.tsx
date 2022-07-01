import React from 'react';
import { useClickOutside, useToggle } from '../../../shared/lib';
import { Dropdown } from '../../base-components';
import { FilterCheckboxGroup, FilterInputText } from '../../filter-elements';
import { Button } from './button';
import arrowBtnIcon from '../../../../public/img/buttons-img/black-arrow.svg';
import { checkboxGroupSeller } from '../../../features';

interface IProps {
  searchShop: string;
  setSearchShop: (value: string) => void;
}

export const SortDropdownBrand: React.FC<IProps> = React.memo(
  ({ searchShop, setSearchShop }) => {
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
          name='Бренд'
          onClick={setOpenSort}
          className='w-[110px]'
          isImage
          src={arrowBtnIcon}
          alt='sort-btn'
        />
        <div className='px-5 w-56'>
          <FilterInputText
            inputValue={searchShop}
            placeholder='Поиск по магазинам...'
            onChange={(value: string) => setSearchShop(value)}
          />
          <FilterCheckboxGroup checkboxGroupData={checkboxGroupSeller} />
        </div>
      </Dropdown>
    );
  }
);

SortDropdownBrand.displayName = 'SortDropdownBrand';
