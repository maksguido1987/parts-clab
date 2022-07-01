import React from 'react';
import { ITab, TabBar } from '../../../entities';
import { useToggle } from '../../../shared/lib';
import { ModalPortal } from '../../../widgets';
import { DeliveryInfo } from './delivery-info';
import { DeliveryMap } from './delivery-map';

export const Delivery = () => {
  const [showModal, setShowModal] = useToggle();

  return (
    <div className='pt-5'>
      <div className='text-base sm:text-lg mb-5 sm:mb-5'>Доставка заказа:</div>
      <div className='flex items-center text-sm mb-5' onClick={setShowModal}>
        <div className='mr-2.5'>Город:</div>
        <div className='bg-top-city-header bg-no-repeat bg-left-5 pl-7 cursor-pointer hover:underline decoration-green'>
          Москва
        </div>
      </div>
      <div className='sm:flex'>
        <TabBar page='order' tabs={deliveryMethodTabs} className='mb-10' >
          <DeliveryInfo />
          <DeliveryMap />
          <DeliveryMap />
          <DeliveryInfo />
        </TabBar>
      </div>
      <ModalPortal show={showModal} onClose={setShowModal} title='Выбор города'>
        Выберите город
      </ModalPortal>
    </div>
  );
};

const deliveryMethodTabs: ITab[] = [
  { label: 'Курьером до двери' },
  { label: 'В пункте выдачи' },
  { label: 'В магазине' },
  { label: 'Экспресс' },
];
