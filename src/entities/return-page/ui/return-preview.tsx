import React from 'react';
import Image from 'next/image';
import { PageLayout } from '../../layouts';
import arrowScrollDown from '../../../../public/img/static-pages/arrow-scroll-down.svg';

export const ReturnPreview = () => {
  return (
    <PageLayout className='bg-gray-50 sm:bg-return-md bg-no-repeat bg-right lg:bg-none'>
      <div className='bg-return-sm sm:bg-none lg:bg-return-lg bg-no-repeat bg-right-bottom lg:bg-lg-details-req-pos'>
        <div className='min-h-[450px] relative pt-10 sm:pt-0 sm:flex flex-col justify-center'>
          <div className='text-xl sm:text-3xl lg:text-4xl font-semibold mb-5'>
            Возврат товара
          </div>
          <div className='text-sm sm:text-base lg:text-lg max-w-[440px] lg:max-w-[686px]'>
            Ситуации бывают разные, и часто, клиенту не подходит товар или
            приходит не в полной комплектации. Или просто пропадает желание его
            покупать. Что делать в этой ситуации? По политике предоставления
            услуг, вы можете вернуть товар, и продавец обязан отправить за него
            деньги. Ниже будут представлены алгоритмы действий, в зависимости от
            ситуации.
          </div>
          <div className='absolute bottom-0 animate-bounce'>
            <div className='relative w-7 sm:w-10 h-7 sm:h-10 cursor-pointer mb-5'>
              <Image
                src={arrowScrollDown}
                alt='arrow-scroll-down'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
