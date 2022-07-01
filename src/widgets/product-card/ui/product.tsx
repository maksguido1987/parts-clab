import React from 'react';
import { Carousel } from '../../../entities';
import { prices } from '../lib/static-data';
import { CardData, CardHeading, Sellers } from './card-components';

export const Product = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5'>
      <Carousel
        images={images}
        className='h-[216px] sm:h-[350px] md:h-[495px] lg:h-[490px] mb-2.5 sm:mb-5 lg:col-start-1 lg:col-end-3 lg:gap-y-2.5'
        isProductCard
      />
      {/** ======Блок с названием детали, артикулом и тд====== */}
      <div className='lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-1'>
        <CardHeading partName='Масляный фильтр hengst E362HD313' />
      </div>
      {/** ======Блок с ценами, кнопкой и информацией====== */}
      <div className='lg:col-start-3 lg:col-span-3 lg:row-start-2 lg:row-span-1 lg:pl-5'>
        <CardData />
        <hr className='border-gray-100 mb-3.5 sm:my-7 lg:my-5' />
        {/** Блок с магазинами и ценами. На разрешении > 640px отображается, < 640px - находится в селектах */}
        <div className='hidden lg:block'>
          <Sellers prices={prices} tradeOffers={16} partName='filtron OE672/7A' />
        </div>
      </div>
    </div>
  );
};

const images = [
  {
    src: '/img/slide-4.png',
    alt: 'slide-1',
  },
  {
    src: 'https://api.partsclub.ru/uploads/details/kyb/349084_kyb_11112020152252124.jpeg',
    alt: 'slide-2',
  },
  {
    src: 'https://api.partsclub.ru/uploads/details/acdelco/19374351_acdelco_12112020134634691.jpeg',
    alt: 'slide-3',
  },
];
