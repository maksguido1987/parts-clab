import React from 'react';
import { SellerRating } from '../../../entities';

export const CartSeller = () => {
  return (
    <div className='md:flex items-end justify-between mb-4 md:mb-10'>
      <div>
        <SellerRating
          name={'Магазин на Нагорной'}
          overallRating={87}
          reviewsCount={7}
          overallOrders={91}
        />
      </div>
      <div className='text-sm text-gray-400 underline cursor-pointer text-right mt-4 sm:mt-0'>
        Очистить корзину
      </div>
    </div>
  );
};
