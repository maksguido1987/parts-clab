import React from 'react';
import { Button } from '../../../entities';

interface IProps {
  btnTitle: string;
}

export const CartPlaceOrder = () => {
  return (
    <div className='pt-10 sm:flex justify-between'>
      <div className='flex items-center justify-between mb-7 sm:mb-0'>
        <div className='mr-5'>Общая стоимость:</div>
        <div className='font-semibold text-xl'>{'580'} ₽</div>
      </div>
      <Button
        name='Оформить заказ'
        onClick={function () {}}
        className='text-sm sm:order-first basis-1/2 max-w-[370px]'
      />
    </div>
  );
};
