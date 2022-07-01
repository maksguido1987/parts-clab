import React from 'react';
import btnArrow from '../../../../../public/img/buttons-img/arrow.svg';
import greenArrowBtn from '../../../../../public/img/buttons-img/green-arrow.svg';
import { ICategoryData } from '../../../../features';
import { useToggle } from '../../../../shared/lib';
import { Button } from '../../../buttons';
import { Carousel } from '../../../carousel';
import { FavoriteBadge, Dott } from '../../../icons';
import { HorizontalCardInfoBlock } from './horizontal-card-info-block';

export const HorizontalCategoryCard: React.FC<ICategoryData> = React.memo(
  ({
    images,
    name,
    brand,
    articul,
    applicability,
    minPrice,
    maxPrice,
  }) => {
    /** Состояние закладки, false - не отмечена, true - товар отмечен */
    const [markProduct, setMarkProduct] = useToggle();

    return (
      <div className='sm:border-b border sm:border-0 border-gray-100 p-2.5 mb-2.5 sm:mb-0'>
        <div className='flex flex-col sm:flex-row grow'>
          {/** Блок со слайдером */}
          <div className='sm:w-52 sm:mr-2.5 shrink-0'>
            <Carousel images={images} className='h-[200px]' />
          </div>
          {/** Блок с данными */}
          <div className='w-full'>

            <div className='md:flex grow justify-between mb-1.5'>
              <HorizontalCardInfoBlock
                name={name}
                brand={brand}
                articul={articul}
                applicability={applicability}
              />
              {/** Блок с ценами и доп информацией */}
              <div className='h-full flex flex-col md:items-end'>
                <div className='text-sm font-bold mb-1.5'>
                  От {minPrice} ₽ до {maxPrice} ₽
                </div>
                {/** Захардкоженные данные */}
                <div className='text-sm flex md:flex-col flex-row md:items-end items-center'>
                  <span className='text-gray-300 cursor-pointer md:mb-1.5 mb-0 pr-2 md:pr-0'>
                    2 продавцов
                  </span>
                  <Dott className='shrink translate-y-1/3 md:hidden block' />
                  <span className='text-green cursor-pointer pl-2 md:pl-0'>
                    2 аналогичные детали
                  </span>
                </div>
              </div>
              
            </div>

            {/** Блок с кнопками и маркером */}
            <div className='flex items-center md:justify-end sm:justify-start justify-end mt-2.5 md:mt-0'>
              <div
                className='border border-gray-200 rounded-md flex items-center justify-center p-3 mr-2.5 cursor-pointer transition hover:border-green'
                onClick={setMarkProduct}
              >
                <FavoriteBadge
                  color='#5DC563'
                  className={`${markProduct ? 'fill-current text-green' : ''}`}
                />
              </div>
              <Button
                size='small-btn'
                className='text-sm whitespace-nowrap mr-2.5'
                name={`Купить за ${minPrice} ₽`}
                isImage
                src={btnArrow}
                onClick={() => {}}
              />
              <Button
                size='small-btn'
                color='white'
                className='text-sm whitespace-nowrap sm:block hidden'
                name='Подробнее'
                isImage
                src={greenArrowBtn}
                onClick={() => {}}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
);

HorizontalCategoryCard.displayName = 'HorizontalCategoryCard';
