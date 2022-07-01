import React, { useState } from 'react';
import Image from 'next/image';
import { CarouselBtn } from './carousel-btn';
import baseImage from '../../../../public/img/no-photo.png';
import { CarouselProgress } from './carousel-progress';
import { CarouselImagesProgress } from './carousel-images-progress';

export interface IImageCarousel {
  /** Путь к картинке */
  src: string;
  /** Alt атрибут */
  alt: string;
}

interface IProps {
  /** Массив данных с путями к картинкам для товара */
  images: IImageCarousel[];
  /** Добавляем высоту компонента */
  className?: string;
  /** Флаг, если передан, то слайер для карточки товара, иначе для обратного поиска */
  isProductCard?: boolean;
}

/** Передаем в компонент слайдера массив картинок и переключением кнопок меняем src. Если нет картинок, рендерим базовое изображение */
export const Carousel: React.FC<IProps> = React.memo(
  ({ images, className, isProductCard }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = images.length;

    const nextSlide = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };

    const prevSlide = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };

    const onSetCurrentImage = (e: React.MouseEvent, idx: number) => {
      e.stopPropagation();
      setCurrentImage(idx); 
    };

    const renderItem = (item: IImageCarousel, idx: number) => {
      const { src, alt } = item;
      return (
        <div
          className={`${
            idx === currentImage ? 'block' : 'hidden'
          } relative w-full h-full`}
          key={idx}
          onClick={nextSlide}
        >
          <Image
            src={src}
            alt={alt}
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>
      );
    };

    return (
      <div
        className={`${className ? className : ''} ${
          isProductCard ? 'lg:flex-col' : 'relative'
        } w-full flex items-center`}
      >
        <div className={`${isProductCard ? 'relative' : ''} w-full h-full`}>
          <CarouselBtn
            radius='90'
            className='left-0 justify-start'
            onClick={prevSlide}
            isProductCard={isProductCard}
          />
          {!Array.isArray(images) || images.length <= 0 ? (
            <div className='relative w-full h-full'>
              <Image
                src={baseImage}
                alt='part'
                layout='fill'
                objectFit='contain'
                priority
              />
            </div>
          ) : (
            images.map(renderItem)
          )}
          <CarouselBtn
            radius='-90'
            className='right-0 justify-end'
            onClick={nextSlide}
            isProductCard={isProductCard}
          />
          {/** Если true, то слайдер отображается в карточке товара и при разрешении > sm прогрессбар заменяется на картинки
           * иначе слайдер отображается в карточках обратного поиска и прогрессбар всегда в виде полосок
           */}
          {!isProductCard && (
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2'>
              <CarouselProgress
                currentImage={currentImage}
                images={Array.from(images)}
                onClick={onSetCurrentImage}
              />
            </div>
          )}
        </div>
        {isProductCard && (
          <div className='order-first lg:order-last'>
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2 sm:hidden'>
              <CarouselProgress
                currentImage={currentImage}
                images={Array.from(images)}
                onClick={onSetCurrentImage}
                isProductCard
              />
            </div>
            <div className='hidden sm:block items-center justify-center'>
              <CarouselImagesProgress
                currentImage={currentImage}
                images={Array.from(images)}
                onClick={onSetCurrentImage}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';
