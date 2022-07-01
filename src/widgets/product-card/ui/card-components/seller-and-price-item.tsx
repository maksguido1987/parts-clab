import React from 'react';
import { CartBage, FavoriteBadge, TopSellerLabel } from '../../../../entities';
import { useToggle } from '../../../../shared/lib';

export interface IPriceItemProps {
  /** Название магазина или продавца */
  seller: string;
  /** Цена */
  price: number;
  /** Если минимальная цена, то отмечаем лейблом */
  isMinPrice?: boolean;
}

export const SellerAndPriceItem: React.FC<IPriceItemProps> = ({
  seller,
  price,
  isMinPrice
}) => {
  const [favorite, setFavorite] = useToggle();
  const [cart, setCart] = useToggle();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite();
  };

  const handleCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCart();
  };

  return (
    <>
      <div className='flex sm:mb-3.5'>
        <div className='grow sm:flex items-end'>
          <div className='antialiased text-xs sm:text-sm text-green mb-1 sm:mb-0 font-semibold flex items-center sm:items-baseline'>
            {isMinPrice && <TopSellerLabel className='mr-1' />}
            {seller}
          </div>
          <div className='hidden sm:block sm:grow border-b border-dashed border-gray-300 sm:mb-1'></div>
          <div className='text-xs sm:text-sm text-gray-300 mb-1 sm:mb-0'>Доставка от 1 дней</div>
          <div className='text-sm sm:text-base font-bold sm:mx-3.5'>{price} ₽</div>
        </div>
        <div className='flex space-x-3 items-end justify-end'>
          <div
            className='w-9 h-9 border border-gray-200 rounded-md flex items-center justify-center cursor-pointer transition hover:border-green'
            onClick={(e) => handleFavorite(e)}
          >
            <FavoriteBadge
              color='#5DC563'
              width={12}
              height={12}
              className={`${favorite ? 'fill-current text-green' : ''}`}
            />
          </div>
          <div
            className={`${
              cart ? 'border border-gray-200 hover:border-green' : 'bg-green hover:bg-green-hover'
            } w-9 h-9 rounded-md flex items-center justify-center cursor-pointer transition`}
            onClick={(e) => handleCart(e)}
          >
            <CartBage
              color={`${cart ? '#5DC563' : '#ffffff'}`}
              className={`${cart ? 'fill-current text-green' : ''}`}
            />
          </div>
        </div>
      </div>
      <hr className='border-gray-100 my-2.5 sm:hidden' />
    </>
  );
};
