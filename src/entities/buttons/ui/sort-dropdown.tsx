import React, { useState } from 'react';
import sortBtnIcon from '../../../../public/img/buttons-img/sort-btn.svg';
import { useClickOutside } from '../../../shared/lib';
import Image from 'next/image';
import {
  ISortData,
  sortData,
} from '../../../features/card/lib/sort-data';
import { Button } from './button';
import { useToggle } from '../../../shared/lib';
import { Dropdown } from '../../base-components';

interface IProps {
  isProductCard?: boolean;
}

export const SortDropdown: React.FC<IProps> = React.memo(({ isProductCard }) => {
  const [openSort, setOpenSort] = useToggle();
  const [links, setActiveLink] = useState<ISortData[]>(sortData);

  /** Открытие закрытие выпадающего меню сортировки */
  const onSetOpenSort = () => {
    openSort && setOpenSort();
  };
  /** Функция, устанавливающая активное состояние пункта меню */
  const onSetActiveLink = (idx: number) => {
    setActiveLink(
      links.map((item, index) =>
        index === idx ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const renderListItem = (item: ISortData, idx: number) => {
    const { category, sortPoint, active } = item;
    return (
      <li
        key={idx}
        className={`${
          active
            ? 'text-green hover:text-green cursor-default bg-gray-100'
            : 'hover:text-gray-500 cursor-pointer'
        } text-sm transition py-2 px-5`}
        onClick={() => onSetActiveLink(idx)}
      >
        {category}
      </li>
    );
  };

  /** Закрывает меню при клике вне его */
  const sortMenuRef = useClickOutside(onSetOpenSort);

  return (
    <Dropdown ref={sortMenuRef} isOpen={openSort}>
      <div>
        <div className={`${isProductCard ? '' : 'hidden'} sm:block`}>
          <Button
            size='actions-bar-btn'
            color='gray'
            name='Сортировка'
            onClick={setOpenSort}
            className='w-full'
            isImage
            src={sortBtnIcon}
            alt='sort-btn'
          />
        </div>
        {!isProductCard && (
          <div
            className='sm:hidden bg-gray-100 rounded-md w-10 h-[30px] flex items-center justify-center'
            onClick={setOpenSort}
          >
            <Image src={sortBtnIcon} alt='sort-btn' width={12} height={12} />
          </div>
        )}
      </div>

      <ul className='w-56'>{links.map(renderListItem)}</ul>
    </Dropdown>
  );
});

SortDropdown.displayName = 'SortDropdown';
