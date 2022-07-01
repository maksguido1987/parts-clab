import React from 'react';
import Image from 'next/image';
import { PageLayout } from '../../layouts';
import arrowScrollDown from '../../../../public/img/static-pages/arrow-scroll-down.svg';

export const DetailRequared = () => {
  return (
    <PageLayout className='bg-gray-50 bg-details-req-xs  md:bg-details-req-md lg:bg-none bg-no-repeat bg-right-bottom md:bg-rigth'>
      <div className='lg:bg-details-req-lg bg-no-repeat md:bg-lg-details-req-pos'>
        <div className='min-h-[500px] pt-20 md:pt-0 relative md:flex flex-col justify-center'>
          <div className='text-xl sm:text-3xl lg:text-4xl font-semibold mb-4'>
            Требуются <br /> оригинальные детали?
          </div>
          <p className='text-sm sm:text-base mr-3 sm:mr-0 max-w-sm xl:max-w-[612px]'>
            <span className='font-semibold'>
              Наш ресурс, сервис автозапчастей –
            </span>
            <br className='xl:hidden' /> это максимально удобный функционал, с
            которым справится как продвинутый пользователь сети, так и новичок.
          </p>
          <div className='absolute bottom-0 animate-bounce'>
            <div className='relative w-[30px] sm:w-10 h-[30px] sm:h-10 cursor-pointer mb-5'>
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
