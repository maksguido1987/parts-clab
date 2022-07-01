import React from 'react';
import { ITab, TabBar } from '../../../entities';

export const PaymentMethod = () => {

  return (
    <div className='pt-5'>
      <div className='text-base sm:text-lg mb-5 sm:mb-5'>Способ оплаты:</div>
      <div className='sm:flex'>
        <TabBar page='order' tabs={paymentMethodTabs} />
      </div>
    </div>
  );
};

const paymentMethodTabs: ITab[] = [
  { label: 'Оплатить сейчас' },
  { label: 'Оплата при получении' },
];
