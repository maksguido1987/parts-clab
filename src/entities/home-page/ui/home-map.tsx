import React from 'react';
import { YandexMap } from '../../../widgets';
import { PageLayout } from '../../layouts';

export const HomeMap = () => {
  return (
    <PageLayout className='py-6 md:py-10 lg:py-12'>
      <h3 className='text-xl md:text-[28px] lg:text-[34px] mb-7 md:mb-10 font-semibold'>
        Широкая география присутствия
      </h3>
      <YandexMap center={[57.756473, 84.778078]} zoom={3} className='h-[250px] sm:h-[380px] md:h-[480px]' />
    </PageLayout>
  );
};
