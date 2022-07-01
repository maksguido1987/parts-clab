import React, { useState } from 'react';
import {
  AccountRepeatOrderIcon,
  AccountReviewIcon,
  AccoutnMyOrdersHelpIcon,
  Dropdown,
  HeadingProductBage,
} from '../../../entities';
import { useClickOutside, useToggle } from '../../../shared/lib';
import { IMyOrderMenu } from '../lib/account.interfaces';

export const MyOrderDropdown = () => {
  const [isOpen, setIsOpen] = useToggle();
  const [links, setActiveLink] = useState<IMyOrderMenu[]>(myOrderMenuLinks);

  const onSetIsOpen = () => {
    isOpen && setIsOpen();
  };

  /** Функция, устанавливающая активное состояние пункта меню */
  const onSetActiveLink = (idx: number) => {
    setActiveLink(
      links.map((item, index) =>
        index === idx ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const renderIcon = (idx: number, active: boolean) => {
    return (
      <>
        {idx === 0 && (
          <AccoutnMyOrdersHelpIcon
            key={idx}
            className={`${
              active
                ? 'text-green fill-current'
                : 'text-gray-500 hover:fill-current'
            } mr-2.5 shrink-0 transition`}
          />
        )}
        {idx === 1 && (
          <AccountRepeatOrderIcon
            key={idx}
            className={`${
              active
                ? 'text-green fill-current'
                : 'text-gray-500 hover:fill-current'
            } mr-2.5 shrink-0 transition`}
          />
        )}
        {idx === 2 && (
          <AccountReviewIcon
            key={idx}
            className={`${
              active
                ? 'text-green fill-current'
                : 'text-gray-500 hover:fill-current'
            } mr-2.5 shrink-0 transition`}
          />
        )}
      </>
    );
  };

  const renderListItem = (item: IMyOrderMenu, idx: number) => {
    const { category, active } = item;
    return (
      <div className='flex items-center' key={idx}>
        {renderIcon(idx, active)}
        <li
          key={idx}
          className={`${
            active
              ? 'text-green cursor-default'
              : 'cursor-pointer hover:text-gray-500'
          } whitespace-nowrap py-2 text-xs transition sm:text-sm`}
          onClick={() => onSetActiveLink(idx)}
        >
          {category}
        </li>
      </div>
    );
  };

  const orderRef = useClickOutside(onSetIsOpen);

  return (
    <Dropdown isOpen={isOpen} ref={orderRef}>
      <div
        onClick={setIsOpen}
        className='group hover:border-green flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-lg border border-gray-200 transition sm:h-[42px] sm:w-[42px]'
      >
        <HeadingProductBage className='text-green w-3 group-hover:fill-current sm:w-auto' />
      </div>
      <ul className='px-4'>{links.map(renderListItem)}</ul>
    </Dropdown>
  );
};

const myOrderMenuLinks: IMyOrderMenu[] = [
  {
    category: 'Оставить отзыв',
    active: true,
  },
  {
    category: 'Повторить заказ',
    active: false,
  },
  {
    category: 'Помощь',
    active: false,
  },
];
