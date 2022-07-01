import React, { FC } from 'react';
import Image from 'next/image';
import { PageLayout } from '../../layouts';
import arrowScrollDown from '../../../../public/img/static-pages/arrow-scroll-down.svg';

export const Questions: FC = () => {
  return (
    <PageLayout className='bg-gray-50 md:bg-how-questions-md bg-no-repeat bg-right lg:bg-none mb-7 md:mb-10'>
      <div className='lg:bg-how-questions-lg bg-no-repeat bg-right'>
        <div className='min-h-[520px] relative pt-10 sm:pt-0 sm:flex flex-col justify-center'>
          <div className='text-xl sm:text-2xl lg:text-[28px] font-semibold mb-5'>
            <p className='text-green'>Требуется деталь на автомобиль?</p> Не
            знаете где купить оригинальные <br className='hidden sm:block' />{' '}
            запчасти <br className='hidden sm:block lg:hidden' /> по приемлемой
            цене?
          </div>
          <div className='text-sm sm:text-base max-w-[460px] lg:max-w-[686px]'>
            <p>Оптимальный вариант сделать выбор на маркетплейсе!</p>
            <p>Выбор товара – это самый ответственный момент.</p>
            <p>
              Особенно, когда нужно подобрать сложные запчасти. Наш сервис
              адаптирован максимально, разобраться с ним может каждый, как
              продвинутый пользователь, так и новичок.
            </p>
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
