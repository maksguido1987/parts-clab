import React from 'react';
import { TabBar } from '../../../entities';
import { ActiveOrders } from './active-orders';

export const MyOrders = () => {
  return (
    <div>
      <div className='md:relative'>
        <h3 className='sm:text-lg lg:text-2xl font-semibold mb-4 md:mb-0 md:absolute translate-y-1/2'>Мои заказы</h3>
        <TabBar
          page='my-order'
          tabs={[{ label: 'Активные' }, { label: 'Выполненные' }]}
        >
          <ActiveOrders images={images} isActiveOrders={true} />
        </TabBar>
      </div>
    </div>
  );
};

const images = [
  '/img/account/fake-part-1.png',
  '/img/account/fake-part-2.png',
  '/img/account/fake-part-3.png',
  '/img/account/fake-part-1.png',
  '/img/account/fake-part-2.png',
  '/img/account/fake-part-3.png',
]
