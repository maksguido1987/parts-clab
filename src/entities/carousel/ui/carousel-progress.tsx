import React from 'react';
import { IImageCarousel } from './carousel';

export interface ICarouselProgressProps {
  /** Принимаемый массив с картинками для слайдера */
  images: IImageCarousel[];
  /** Текущая картинка */
  currentImage: number;
  /** Функция, устанавливает текущую картинку по индексу */
  onClick: (e: React.MouseEvent, idx: number) => void;
  /** Флаг. При true прогресс-бар используется в карточке товара, иначе на странице сатегорий */
  isProductCard?: boolean;
}

export const CarouselProgress: React.FC<ICarouselProgressProps> = ({
  images,
  currentImage,
  onClick,
  isProductCard,
}) => {
  const renderItem = (_: any, idx: number) => {
    return (
      <div
        key={idx}
        className='cursor-pointer h-full w-full flex items-center'
        onClick={(e) => onClick(e, idx)}
      >
        <div
          className={`${
            currentImage === idx ? 'bg-green' : 'bg-gray-400'
          } h-1/2 w-full `}
        ></div>
      </div>
    );
  };

  return (
    <div
      className={`${isProductCard ? 'w-[152px]' : 'w-[100px]'} h-2 flex space-x-1`}
    >
      {images.length < 1 ? null : images.map(renderItem)}
    </div>
  );
};
