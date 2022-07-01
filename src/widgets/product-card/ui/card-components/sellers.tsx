import React from 'react';
import { IPriceItemProps, SellerAndPriceItem } from './seller-and-price-item';

interface IProps {
  prices: IPriceItemProps[];
  partName: string;
  tradeOffers: string | number;
}

export const Sellers: React.FC<IProps> = React.memo(({ prices, partName, tradeOffers }) => {
  /** Сортируем по цене, от меньшей к большей */
  const sortPrices = prices.slice().sort((a, b) => a.price - b.price);

  return (
    <div className=''>
      <h3 className='text-base font-bold mb-5 hidden sm:block'>
        Все цены на «{partName}»{' '}
      </h3>
      {sortPrices.map((item: IPriceItemProps, idx: number) => {
        return idx === 0 ? (
          <SellerAndPriceItem
            seller={item.seller}
            isMinPrice
            price={item.price}
            key={idx}
          />
        ) : (
          <SellerAndPriceItem
            seller={item.seller}
            price={item.price}
            key={idx}
          />
        );
      })}
      <div className='text-sm text-center hidden sm:block'>
        <span className='border-b border-green border-dotted cursor-pointer'>Все {tradeOffers} предложений</span>
      </div>
      <hr className='border-gray-100 mt-7 mb-5 hidden sm:block' />
    </div>
  );
});

Sellers.displayName = 'Sellers';
