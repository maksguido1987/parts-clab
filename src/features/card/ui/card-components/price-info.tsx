import React from 'react';
import { Dott } from '../../../../entities';

interface IProps {
  minPrice: number;
  maxPrice: number;
  sellersCount: number;
  partsCount: number;
  isHorizontal: boolean;
}

export const PriceInfo: React.FC<IProps> = ({
  minPrice,
  maxPrice,
  sellersCount,
  partsCount,
  isHorizontal,
}) => {
  return (
    <div
      className={`${isHorizontal ? 'flex h-full flex-col md:items-end' : ''}`}
    >
      <div
        className={`text-sm font-bold ${
          isHorizontal ? 'mb-2 lg:mb-2' : 'mb-1.5'
        }`}
      >
        От {minPrice} ₽ до {maxPrice} ₽
      </div>
      <div
        className={`flex items-center ${
          isHorizontal
            ? 'flex-row text-sm md:flex-col md:items-end'
            : 'mb-4 text-xs sm:hidden'
        }`}
      >
        <span
          className={`cursor-pointer text-gray-300 ${
            isHorizontal ? 'mb-0 pr-2 md:mb-1.5 md:pr-0' : 'pr-1'
          }`}
        >
          {sellersCount} продавцов
        </span>
        <Dott
          className={`shrink translate-y-1/3 ${
            isHorizontal ? 'block md:hidden' : ''
          }`}
        />
        <span
          className={`cursor-pointer text-green ${
            isHorizontal ? 'pl-2 md:pl-0' : 'pl-1'
          }`}
        >
          {partsCount} аналогичные детали
        </span>
      </div>
    </div>
  );
};
