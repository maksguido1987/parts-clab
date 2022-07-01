import React from 'react';
import { AccountDeliveryIcon, Button, OrderCard } from '../../../entities';
import { MyOrderDropdown } from './my-order-dropdown';

interface IProps {
  isActiveOrders: boolean;
  images: string[];
}

export const ActiveOrders: React.FC<IProps> = ({ isActiveOrders, images }) => {
  const renderActiveOrderImage = (src: string, idx: number) => {
    return (
      <OrderCard
        key={idx}
        src={src}
        partName={'Крепеж груза Резинка Garde 70см 6мм'}
        brand={'garde'}
        articul={'776.327'}
        price={'37'}
      />
    );
  };

  return (
    <>
      {isActiveOrders ? (
        <div className='border-y border-gray-200 py-5'>
          <div className='flex mb-2.5'>
            <AccountDeliveryIcon className='mr-2.5' />
            <div className='mr-7 grow text-xs sm:text-sm'>
              <span className='font-semibold'>Доставка по адресу:</span> г.
              Москва Южнопортовая ул., 5 строение 6
            </div>
            <MyOrderDropdown />
          </div>
          {images.map(renderActiveOrderImage)}
        </div>
      ) : (
        <div className='flex flex-col items-center pt-10 sm:pt-20'>
          <div className='mb-5 text-sm font-semibold sm:mb-7 sm:text-lg'>
            У вас нет активных заказов
          </div>
          <Button
            name='Перейти к покупкам'
            onClick={() => {}}
            size='small-btn'
            className='w-48 text-xs'
          />
        </div>
      )}
    </>
  );
};
