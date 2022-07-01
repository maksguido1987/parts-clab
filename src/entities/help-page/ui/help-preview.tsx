import React from 'react';
import Image from 'next/image';
import { PageLayout } from '../../layouts';
import telegramIcon from '../../../../public/img/static-pages/telegram.svg';
import whatsappIcon from '../../../../public/img/static-pages/whatsapp.svg';
import viberIcon from '../../../../public/img/static-pages/viber.svg';

export const HelpPreview = () => {
  return (
    <PageLayout className='bg-gray-100 pt-5 pb-10 md:pt-0 md:pb-0 bg-help sm:bg-help-sm bg-no-repeat bg-right-top sm:bg-right lg:bg-none'>
      <div className='lg:bg-help-lg bg-no-repeat lg:bg-right sm:bg-none'>
        <div className='flex justify-end sm:justify-start sm:items-center pt-48 sm:pt-0 md:min-h-[520px]'>
          <div className='text-sm md:text-base sm:basis-1/2'>
            <div className='text-xl md:text-2xl lg:text-4xl font-semibold mb-4 sm:mb-5'>
              <span className='text-green'>Нужна помощь</span>
              <br /> с подбором детали?
            </div>
            <p className='mb-4 md:mb-10'>
              Свяжитесь с нами любым удобным для вас способом и мы поможем найти
              нужную деталь именно для Вашего автомобиля! Для этого пришлите нам
              ВИН-номер и артикул искомой детали. Если он не известен, то в этом
              случае будет достаточно вин-номера и описание детали.
            </p>
            <div className='flex items-center justify-between w-36 sm:w-52'>
              <div className='relative w-8 h-8 sm:w-12 sm:h-12'>
                <Image layout='fill' objectFit='contain' alt='telegramm' src={telegramIcon} />
              </div>
              <div className='relative w-8 h-8 sm:w-12 sm:h-12'>
                <Image layout='fill' objectFit='contain' alt='whatsapp' src={whatsappIcon} />
              </div>
              <div className='relative w-8 h-8 sm:w-12 sm:h-12'>
                <Image layout='fill' objectFit='contain' alt='viber' src={viberIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
