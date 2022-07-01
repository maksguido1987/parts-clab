import React, { FC } from 'react';
import { PageLayout } from '../../layouts';

export const PaymentPageBunner: FC = () => {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#F1FFF5] to-[#D8F8E1] rounded-[20px] mb-7 sm:mb-12 md:mb-[60px]'>
        <div className='flex sm:items-center bg-pay-bunner sm:bg-pay-bunner-sm lg:bg-pay-bunner-lg bg-no-repeat bg-bottom sm:bg-right min-h-[482px] sm:min-h-[300px] py-8 px-2.5 sm:px-5 md:px-10'>
          <div className='sm:basis-1/2'>
            <p className='text-base md:text-2xl xl:text-2xl font-semibold sm:basis-1/2 mb-4'>
              <span className='text-green'>Перевод денег</span> - максимально
              прозрачный процесс
            </p>
            <p className='text-sm'>
              Дополнительные сведения при оплате картой вводить не нужно. Данные
              не передаются третьим лицам и используются только в рамках
              торговой площадки. Это означает, что за пределы сайта информация
              не выйдет, переживать о безопасности не стоит!{' '}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
