import React from 'react';
import Image from 'next/image';
import { IHomePageStaticData } from '../lib/interfaces';

export const BenefistItem: React.FC<IHomePageStaticData> = React.memo(
  ({ title, src, text, alt }) => {
    return (
      <div className='bg-gray-50 border border-gray-200 rounded-[10px] px-2.5 md:px-5 py-5 md:py-7 min-h-[170px] md:min-h-[184px] lg:min-h-[198px]'>
        <div className='flex justify-between items-center mb-4'>
          <h4 className='text-sm md:text-base lg:text-lg font-semibold w-40 md:w-44'>
            {title}
          </h4>
          <div className='w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-benefistIcon flex items-center justify-center'>
            <span className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 relative'>
              <Image src={src} layout='fill' objectFit='cover' alt={alt} />
            </span>
          </div>
        </div>
        <p className='text-sm lg:text-base text-blue md:pr-4 lg:pr-7'>{text}</p>
      </div>
    );
  }
);

BenefistItem.displayName = 'BenefistItem';
