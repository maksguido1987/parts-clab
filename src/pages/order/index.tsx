import { NextPage } from 'next/types';
import React, { useState } from 'react';
import { PageWrapper } from '../../widgets';
import { Button, PageHeading, PageLayout } from '../../entities';
import { Delivery, PaymentMethod, UserData, YourOrder } from '../../features';

const Order: NextPage = () => {
  const [isValidForm, setIsValidForm] = useState(false);


  return (
    <PageWrapper>
      <PageLayout>
        <PageHeading title={'Оформить заказ'} className='mb-7 sm:mb-10' />
        <div className='xl:flex'>
          <div className='xl:basis-[55%] xl:mr-7'>
            <UserData />
            <PaymentMethod />
            <Delivery />
          </div>
          <div className='xl:basis-[45%]'>
            <YourOrder
              productCount={2}
              productsPrice={580}
              courierDeliveryPrice={303}
              finalPrice={883}
              name={'Магазин на Нагорной'}
              overallRating={87}
              reviewsCount={7}
              overallOrders={91}
              deliveryDate='пятницу, 1 октября'
            />
            <Button
              name='Оформить заказ'
              size='form-btn'
              onClick={() => {}}
              className='w-full'
              disabled={!isValidForm}
            />
          </div>
        </div>
      </PageLayout>
    </PageWrapper>
  );
};

export default Order;
