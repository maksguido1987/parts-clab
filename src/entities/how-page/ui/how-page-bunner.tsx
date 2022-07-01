import React, { FC } from 'react';
import { PageLayout } from '../../layouts';

export const HowPageBunner: FC = () => {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#F1FFF5] to-[#D8F8E1] rounded-[20px] mb-7 sm:mb-12 md:mb-[60px]'>
        <div className='flex sm:items-center bg-how-bunner-sm sm:bg-how-bunner-md lg:bg-how-bunner-lg bg-no-repeat bg-bottom sm:bg-right min-h-[360px] sm:min-h-[300px] py-8 px-2.5 sm:px-5 md:px-10'>
          <p className='text-sm md:text-base xl:text-2xl font-semibold sm:basis-1/2'>
            Специфика автозапчастей – не простая, но{' '}
            {/* <br className='hidden sm:block' /> */}
            <span className='text-green'>мы расскажем</span>, как это сделать с
            минимальными временными затратами.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
