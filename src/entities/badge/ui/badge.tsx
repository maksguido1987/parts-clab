import React, { ReactNode } from 'react';
import Image from 'next/image';
import CartIcon from '../../../../public/img/header-footer/cart.svg';
import FavIcon from '../../../../public/img/header-footer/fav.svg';

type Props = {
  value: string | number;
  type: 'cart' | 'favorites';
};

export const Badge: React.FC<Props> = React.memo(({ value, type }) => {
  let icon: ReactNode;
  let name: string;
  switch (type) {
    case 'favorites':
      icon = <Image width={13} height={17} src={FavIcon} alt='favorites' />;
      name = 'Избранное';
      break;
    case 'cart':
      icon = <Image width={19} height={17} src={CartIcon} alt='cart' />;
      name = 'Корзина';
      break;
  }

  return (
    <div className='flex items-center cursor-pointer space-x-1 md:p-3 p-1 group md:pl-9 md:py-5 md:pr-1'>
      <div className='hidden lg:inline transition group-hover:text-green'>{name}</div>
      <div className='flex items-center justify-center w-5 h-5'>{icon}</div>
      <span className={`${value === 0 || value === '0' ? 'text-gray-400' : 'text-blue'}`}>
        {value}
      </span>
    </div>
  );
});

Badge.displayName = 'Badge';
