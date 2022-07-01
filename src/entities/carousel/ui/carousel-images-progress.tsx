import React from 'react';
import Image from 'next/image';
import { ICarouselProgressProps } from './carousel-progress';
import { IImageCarousel } from './carousel';

export const CarouselImagesProgress: React.FC<ICarouselProgressProps> = ({
  images,
  onClick,
}) => {
  const renderItem = (image: IImageCarousel, idx: number) => {
    const { src, alt } = image;
    return (
      <div
        key={idx}
        className='cursor-pointer relative h-[80px] w-[100px] md:w-[80px] '
        onClick={(e) => onClick(e, idx)}
      >
        <Image src={src} alt={alt} layout='fill' objectFit='contain' />
      </div>
    );
  };

  return (
    <div className='flex items-center justify-center space-x-1 sm:flex-col lg:flex-row'>{images.map(renderItem)}</div>
  );
};
