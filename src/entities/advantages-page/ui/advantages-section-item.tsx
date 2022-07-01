import React from 'react';
import Image from 'next/image';
import { IAdvantagesData } from './advantages-section';

export const AdvantagesSectionItem: React.FC<IAdvantagesData> = ({
  src,
  alt,
  title,
  text,
}) => {
  return (
    <div className='mb-7 sm:mb-0'>
      <div className='rounded-md bg-gradient-to-r from-green-bg to-green w-11 md:w-12 h-11 md:h-12 flex items-center justify-center mb-5'>
        <div className='relative h-5 sm:h-6 w-5 sm:w-6 animate-advantages-icon'>
          <Image src={src} alt={alt} layout='fill' objectFit='cover' />
        </div>
      </div>
      <div className='text-[15px] sm:text-base font-semibold mb-2.5'>{title}</div>
      <div className='text-sm'>{text}</div>
    </div>
  );
};
