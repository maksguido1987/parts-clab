import React from 'react';
import { PageLayout } from '../../../layouts';
import { AdvantagesSellerItem } from './advantages-seller-item';
import { ShopData } from './shop-data';
import crownGreenIcon from '../../../../../public/img/shop-page/crown-green.svg';
import likeIcon from '../../../../../public/img/shop-page/like.svg';
import cartIcon from '../../../../../public/img/shop-page/cart.svg';
import reloadIcon from '../../../../../public/img/shop-page/reload.svg';

export const HeadShop = () => {
  return (
    <PageLayout className='sm:pb-[100px] mb-5'>
      <div className='relative'>
        <ShopData {...shopData} />
        <div className='sm:absolute top-[180px] md:right-5 lg:right-10 md:max-w-[670px] lg:max-w-[830px] grid grid-cols-2 sm:grid-cols-4 gap-2.5'>
          <AdvantagesSellerItem
            src={crownGreenIcon}
            alt='crown'
            text='Рекомедованный продавец'
          />
          <AdvantagesSellerItem
            src={likeIcon}
            alt='like'
            text='Все прайсы актуальны'
          />
          <AdvantagesSellerItem
            src={cartIcon}
            alt='cart'
            text='95% заказа передача в срок'
          />
          <AdvantagesSellerItem
            src={reloadIcon}
            alt='loader'
            text='100% гарантия возврата средств'
          />
        </div>
      </div>
    </PageLayout>
  );
};

const shopData = {
  firstDay: 'пн',
  lastDay: 'вс',
  firstTime: '9:00',
  lastTime: '18:00',
  address: 'Москва, Нагорная 5.',
  tel: '+7 (499) 350 32 46',
  shopName: 'Магазин на Нагорной',
};
