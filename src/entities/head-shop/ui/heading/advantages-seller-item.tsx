import React from 'react';
import Image from 'next/image';

interface IProps {
  src: string;
  alt: string;
  text: React.ReactNode;
}

export const AdvantagesSellerItem: React.FC<IProps> = ({ src, alt, text }) => {
  return (
    <div className='min-h-[118px] md:max-h-[132px] lg:max-h-[144px] bg-gradient-to-r from-green-bg to-green py-4 lg:py-5 sm:py-[18px] px-1.5 sm:px-4 md:px-5 rounded-[10px]'>
      <div className='h-full flex flex-col items-center'>
        <div className='w-10 sm:w-12 h-10 shrink-0 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3 lg:mb-3'>
          <div className='relative w-[14px] sm:w-[18px] h-[14px] sm:h-[18px]'>
            <Image src={src} alt={alt} layout='fill' objectFit='contain' />
          </div>
        </div>
        <div className='text-white text-center text-[13px] sm:text-sm lg:text-base'>
          {text}
        </div>
      </div>
    </div>
  );
};
