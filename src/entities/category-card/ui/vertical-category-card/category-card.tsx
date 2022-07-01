import React from 'react';
import btnArrow from '../../../../../public/img/buttons-img/arrow.svg';
import { ICategoryData } from '../../../../features';
import { useToggle } from '../../../../shared/lib';
import { Button } from '../../../buttons';
import { Carousel } from '../../../carousel';
import { FavoriteBadge, Dott } from '../../../icons';
import { CardInfoBlock } from './card-info-block';

export const CategoryCard: React.FC<ICategoryData> = React.memo(
  ({
    images,
    name,
    brand,
    articul,
    applicability,
    minPrice,
    maxPrice,
    isNew,
    value,
  }) => {
    /** Состояние закладки, false - не отмечена, true - товар отмечен */
    const [markProduct, setMarkProduct] = useToggle();

    return (
      <div className='border border-gray-100 p-2.5 w-full'>
        <div className='h-full flex flex-col justify-between'>
          {/** Блок со слайдером */}
          <div className='w-full mb-3 mx-auto'>
            <Carousel images={images} className='h-[180px]' />
          </div>
          {/** Блок с данными, принимает children, у которых на разных расположениях карточек разные стили */}
          <CardInfoBlock
            name={name}
            brand={brand}
            articul={articul}
            applicability={applicability}
          />
          {/** Блок с ценами, кнопками и доп информацией */}
          <div className='h-full flex flex-col justify-between'>
            <div className='text-sm font-bold lg:mb-2 sm:mb-10 mb-2'>
              От {minPrice} ₽ до {maxPrice} ₽
            </div>
            {/** Захардкоженные данные */}
            <div className='text-xs flex items-center mb-4 sm:hidden'>
              <span className='text-gray-300 pr-1'>2 продавцов</span>
              <Dott className='shrink translate-y-1/3' />
              <span className='text-green pl-1'>2 аналогичные детали</span>
            </div>
            
            <div className='flex items-center justify-end'>
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
                className='text-sm whitespace-nowrap'
                name={`Купить за ${minPrice} ₽`}
                isImage
                src={btnArrow}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CategoryCard.displayName = 'CategoryCard';
