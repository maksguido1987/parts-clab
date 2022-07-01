import React, { useState } from 'react';

type Props = {
  text: string;
  active: boolean;
  onClick?: () => void;
};

export const NavItem = React.memo(({ text, active, onClick }: Props) => {
  return (
    <li
      className='uppercase text-center transition flex justify-center whitespace-nowrap px-4 sm:py-1 py-2.5 last:mb-3 md:last:mb-0'
      onClick={onClick}
    >
      <a
        className={`${
          active
            ? 'text-green cursor-default'
            : 'hover:text-gray-500 cursor-pointer'
        }`}
      >
        {text}
      </a>
    </li>
  );
});

NavItem.displayName = 'NavItem';
