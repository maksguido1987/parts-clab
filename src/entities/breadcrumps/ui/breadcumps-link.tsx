import React from 'react';

interface IProps {
  /** Имя ссылки на раздел запчастей */
  name: string;
  /** Событие перехода на страницу */
  onClick?: () => void;
  /** Если последний элемент, то меняются стили */
  isLast?: boolean;
}

export const BreadcumpsLink: React.FC<IProps> = React.memo(
  ({ name, onClick, isLast }) => {
    return (
      <li
        className={`${
          isLast
            ? 'text-black'
            : 'text-gray-300 hover:text-gray-400 cursor-pointer'
        } transition text-xs whitespace-nowrap lg:text-sm mr-1 py-0.5`}
      >
        <a onClick={onClick} className=''>
          {isLast ? `${name}` : `${name} -`}
        </a>
      </li>
    );
  }
);

BreadcumpsLink.displayName = 'BreadcumpsLink';
