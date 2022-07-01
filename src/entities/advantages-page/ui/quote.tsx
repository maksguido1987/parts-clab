import React from 'react';
import { PageLayout } from '../../layouts';

export const Quote = () => {
  return (
    <PageLayout className='pt-10'>
      <div className='rounded-[20px] bg-gray-100 px-2.5 sm:px-7 py-11 sm:py-20 md:py-32 text-center'>
        <div className='text-[54px] leading-4 mb-2.5'>“</div>
        <div className='text-sm sm:text-base md:text-lg max-w-3xl mx-auto'>
          Сотрудничество с маркетплейсом – это гарантия качества и безопасности.
          Покупки через проверенные площадки – это расширенный ассортимент и
          быстрая доставка в любую точку СНГ. А при возникновении вопросов,
          специалисты платформы помогут сделать правильный выбор и решить любую
          проблему!
        </div>
      </div>
    </PageLayout>
  );
};
