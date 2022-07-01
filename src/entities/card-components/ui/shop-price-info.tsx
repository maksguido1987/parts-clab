import React from 'react';

interface IProps {
  open?: boolean;
  isHorizontal?: boolean;
  price: number;
  partsCount: number;
  seller: string;
}

export const ShopPriceInfo: React.FC<IProps> = ({ isHorizontal = false, open = false, price, partsCount, seller }) => {
  return (
    <div className='flex flex-col mb-2'>
      <div className='flex sm:block items-center mb-1.5'>
        <div className='flex items-center sm:mb-2'>
          <div className='text-sm sm:text-base font-bold mr-2'>
            {price} ₽
          </div>
          <div className='px-2 h-[14px] sm:h-4 inline-flex items-center leading-3 bg-green-light rounded-full text-xs text-green mr-2'>
            {partsCount >= 10 ? '10+ шт' : `${partsCount} шт`}
          </div>
        </div>
        <div className='text-xs text-gray-400'>Доставка от 1 дней</div>
      </div>
      <div className='text-xs sm:text-sm flex items-end shrink'>
        <span className='text-gray-400 mb-0'>
          Продавец:{' '}
          <span className='text-green cursor-pointer pl-1'>
            {seller}
          </span>
        </span>
      </div>
    </div>
  );
};
