import { NextPage } from 'next/types';
import React from 'react';
import { OrderCard, PageHeading, PageLayout } from '../../entities';
import { CartChecker, CartPlaceOrder, CartSeller, PageWrapper } from '../../widgets';

const Cart: NextPage = () => {
  return (
    <PageWrapper>
      <PageLayout className='pb-5 md:pb-10'>
        <PageHeading title='Корзина' className='mb-5 mt-5 md:mb-7' />
        <CartChecker />
        <CartSeller />
        <div>
          <OrderCard
            src={''}
            partName={'Крепеж груза Резинка Garde 70см 6мм'}
            brand={'garde'}
            articul={'776.327'}
            price={'37'}
            isCart
          />
          <OrderCard
            src={'/img/cart-image.png'}
            partName={'Крепеж груза Резинка Garde 70см 6мм'}
            brand={'garde'}
            articul={'776.327'}
            price={'37'}
            isCart
          />
        </div>
        <CartPlaceOrder />
      </PageLayout>
    </PageWrapper>
  );
};

export default Cart;
