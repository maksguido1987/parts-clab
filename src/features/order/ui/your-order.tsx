import React from 'react';
import Image from 'next/image';
import { ISellerRatingProps, RatingBar, SellerRating } from '../../../entities';
import deliveryIcon from '../../../../public/img/delivery.svg';
import Link from 'next/link';

interface IProps extends ISellerRatingProps {
  productCount: number;
  productsPrice: number;
  courierDeliveryPrice: number;
  finalPrice: number;
  deliveryDate?: string;
}

export const YourOrder: React.FC<IProps> = ({
  productCount,
  productsPrice,
  courierDeliveryPrice,
  finalPrice,
  name,
  overallRating,
  reviewsCount,
  overallOrders,
  deliveryDate,
}) => {
  return (
    <div className='rounded-[10px] bg-gray-50 py-5 sm:py-10 lg:py-[30px] px-2.5 sm:px-[30px] mb-5'>
      <div className='font-semibold text-lg sm:text-2xl mb-5'>Ваш заказ:</div>
      <div className='text-sm sm:text-base space-y-2'>
        <div className='flex items-center justify-between'>
          {productCount} на сумму{' '}
          <div className='text-lg sm:text-xl'>{productsPrice} ₽</div>{' '}
        </div>
        <div className='flex items-center justify-between'>
          Курьерская доставка{' '}
          <div className='text-lg sm:text-xl'>{courierDeliveryPrice} ₽</div>{' '}
        </div>
        <div className='flex items-center justify-between'>
          Итого с доставкой{' '}
          <div className='text-lg sm:text-xl'>{finalPrice} ₽</div>{' '}
        </div>
      </div>
      <hr className='border-gray-200 my-5' />
      <SellerRating
        name={name}
        overallRating={overallRating}
        reviewsCount={reviewsCount}
        overallOrders={overallOrders}
      />
      <hr className='border-gray-200 mt-5 mb-2.5' />
      <div className='flex items-center'>
        <div className='shrink-0 mr-2.5'>
          <Image
            src={deliveryIcon}
            alt='delivery-icon'
            width={20}
            height={20}
          />
        </div>
        <div className='text-sm'>
          доставка курьером до двери, в {deliveryDate}
        </div>
      </div>
      <hr className='border-gray-200 mt-2.5 mb-5' />
      <div className='text-sm mb-5'>
        Мы не списываем деньги сразу, а замораживаем их, пока вы не получите
        товар.{' '}
        <Link href='/payment'>
          <a className='text-green cursor-pointer'>
            Подробнее об оплате
          </a>
        </Link>
      </div>
      <div className='text-sm mb-2.5'>
        Нажимая на кнопку «Перейти к оплате заказа», вы принимаете условия{' '}
        <Link href='/policy'>
          <a className='text-green cursor-pointer'>
            Публичной оферты
          </a>
        </Link>
      </div>
    </div>
  );
};
