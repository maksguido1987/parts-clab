import React from 'react';
import { Carousel, IImageCarousel } from '../../../../entities';

interface IProps {
  isHorizontal: boolean;
  images: IImageCarousel[];
}

export const CardCarousel: React.FC<IProps> = ({ isHorizontal, images }) => {
  return (
    <div className={`${isHorizontal ? 'sm:w-52 sm:mr-2.5 shrink-0' : 'w-full mb-3 mx-auto'}`}>
      <Carousel images={images} className={`${isHorizontal ? 'h-[200px]' : 'h-[180px]'}`} />
    </div>
  );
};
