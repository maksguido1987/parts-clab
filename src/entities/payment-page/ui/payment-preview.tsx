import React from 'react';
import { PageLayout } from '../../layouts';

export const PaymentPreview = () => {
  return (
    <PageLayout className='bg-gray-100 pt-5 pb-10 md:pt-0 md:pb-0 sm:bg-payment-sm bg-no-repeat sm:bg-right lg:bg-none'>
      <div className='bg-payment lg:bg-payment-lg bg-no-repeat bg-top lg:bg-right sm:bg-none'>
        <div className='flex justify-end sm:justify-start sm:items-center pt-64 sm:pt-0 md:min-h-[520px]'>
          <div className='text-sm md:text-base lg:text-lg sm:basis-1/2'>
            <div className='text-xl md:text-2xl lg:text-4xl font-semibold mb-4 sm:mb-5'>
              Оплата и получение заказа
            </div>
            <p className='mb-4 md:mb-10'>
              Сервис Partsclub.ru сделан по концепции максимального удобства
              подобора и покупки товара, как это реализовано на аналогичных
              крупных торговых площадках, при этом мы не забыли о безопасности и
              защите магазине-продавца и покупателя.
            </p>
            <ul className=''>
              <li className='flex mb-2 md:mb-7'>
                <div className='w-2.5 h-2.5 bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full mr-2.5 mt-2'></div>
                Заказ через нас - это надежно
              </li>
              <li className='flex mb-2 md:mb-7'>
                <div className='w-2.5 h-2.5 bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full mr-2.5 mt-2'></div>
                Простое и быстрое оформление заказа
              </li>
              <li className='flex'>
                <div className='w-2.5 h-2.5 bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full mr-2.5 mt-2'></div>
                СМС уведомление и отслеживание посылки
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
