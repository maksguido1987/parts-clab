import React from 'react';
import { RatingBar } from '../../rating-bar';

export interface ISellerRatingProps {
  /** Название магазина или продавца */
  name: string;
  /** Общий рейтинг */
  overallRating: number;
  /** Отзывов */
  reviewsCount: number;
  /** Продаж */
  overallOrders: number;
}

export const SellerRating: React.FC<ISellerRatingProps> = ({
  overallRating,
  reviewsCount,
  overallOrders,
  name,
}) => {
  return (
    <>
      <div className='text-base sm:text-lg font-semibold mb-4 md:mb-5'>
        {name}
      </div>
      <div className='sm:flex'>
        <div className='flex items-center mb-4 sm:mb-0 sm:mr-5'>
          <span className='text-sm mr-2.5'>Рейтинг магазина:</span>
          <RatingBar className='w-[114px] h-[14px]' done={overallRating} />
        </div>
        <div className='text-sm text-blue space-x-3'>
          <span>{reviewsCount} отзывов</span>
          <span>{overallOrders} заказ</span>
        </div>
      </div>
    </>
  );
};
