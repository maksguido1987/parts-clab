import React from 'react';
import { PageLayout } from '../../layouts';

export const ProblemResolution = () => {
  return (
    <PageLayout className='pt-10 lg:pt-20 pb-12'>
      <div className='sm:flex items-center'>
        <div className='bg-advantages-like-sm md:bg-advantages-like-md lg:bg-advantages-like-lg bg-no-repeat bg-center basis-1/2 min-h-[235px] md:min-h-[298px] lg:min-h-[380px]'></div>
        <div className='basis-1/2 order-first pt-6 sm:pt-0'>
          <div className='max-w-sm lg:max-w-full'>
            <p className='text-base md:text-2xl font-semibold mb-4'>
              Мы работаем на <br className='lg:hidden' /> прозрачных условиях.
            </p>
            <p className='text-sm md:text-base lg:text-lg lg:max-w-[416px]'>
              При возникновении проблем, специалисты технической поддержки
              помогут в решении любого вопроса!
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
