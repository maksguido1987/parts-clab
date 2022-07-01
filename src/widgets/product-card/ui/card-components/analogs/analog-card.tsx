import React from 'react';
import {
  AnalogCardOpenedLabel,
  Carousel,
  Feedbacks,
  ShopButtons,
  ShopPriceInfo,
  TabBar,
} from '../../../../../entities';
import { useToggle } from '../../../../../shared/lib';
import { Parameters } from '../parameters';
import { ICategoryData } from '../../../../../features';
import { AnalogCardInfo } from './analog-card-info';
import { feedbacks, tabLabels } from '../../../lib/static-data';

export const AnalogCard: React.FC<ICategoryData> = React.memo(
  ({
    images,
    name,
    brand,
    articul,
    applicability,
    analogDetail,
    isNewDetail,
    partsCount,
    price,
    seller,
  }) => {
    /** Состояние закладки, false - не отмечена, true - товар отмечен */
    const [favorite, setFavorite] = useToggle();
    /** Состояние корзины. Товар в корзине, либо нет */
    const [cart, setCart] = useToggle();
    const [open, setOpen] = useToggle();

    const handleOpenCard = () => {
      if (typeof window !== 'undefined') {
        const mql = window.matchMedia('(min-width: 640px)');
        if (mql.matches) {
          setOpen();
        }
      }
    };

    const handleFavorite = (e: React.MouseEvent) => {
      e.stopPropagation();
      setFavorite();
    };

    const handleCart = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCart();
    };

    // animate-pullDown origin-[50%_0%]
    // animate-pullUp origin-[50%_100%]

    return (
      <>
        <div
          className={`${
            open
              ? 'animate-pullDown origin-[50%_0%]'
              : 'animate-pullUp origin-[50%_100%]'
          } sm:border-b border sm:border-0 border-gray-100 mb-2.5 sm:mb-0 hover:shadow-inner hover:bg-gray-50 cursor-pointer`}
          onClick={handleOpenCard}
        >
          <div className='relative p-2.5 sm:pl-5 sm:px-0 lg:pl-7 mb-2.5 sm:mb-0'>
            <div className='flex flex-col sm:flex-row grow'>
              {/** Блок со слайдером */}
              <div className={`${open ? 'basis-5/12' : 'basis-auto'} transition-all duration-300`}>
                <div className={`${open ? 'sm:w-auto' : 'sm:w-52'} sm:mr-2.5 mb-2.5 transition-all duration-300`}>
                  <Carousel
                    images={images}
                    className={`${
                      open ? 'lg:h-[420px] h-[260px]' : 'h-[180px]'
                    } transition-all duration-300`}
                  />
                </div>
              </div>
              {/** Блок с данными */}
              <div className={`${open ? 'basis-7/12 duration-300' : 'basis-full duration-500'} transition-all`}>
                <div className={`${open ? '' : 'md:flex'} grow mb-1.5`}>
                  <AnalogCardInfo
                    open={open}
                    name={name}
                    brand={brand}
                    articul={articul}
                    applicability={applicability}
                    analogDetail={analogDetail}
                    isNewDetail={isNewDetail}
                  />
                  {/** Блок с ценами и доп информацией */}
                  <ShopPriceInfo
                    isHorizontal
                    price={price}
                    partsCount={partsCount}
                    seller={seller}
                  />
                </div>
                {/** ======Блок с кнопками и маркерами====== */}
                <ShopButtons
                  favorite={favorite}
                  open={open}
                  cart={cart}
                  handleFavorite={handleFavorite}
                  handleCart={handleCart}
                />
              </div>
            </div>
            {/** Лейбл. Показывает, развернута или свёрнута карточка (вурхний левый угол) */}
            <AnalogCardOpenedLabel open={open} />
          </div>
          {/** Блок с параметрами. При открытой карточке */}
            <div className={`${open ? 'mb-10 pl-5' : 'c-hidden'} transition-all duration-500`}>
              <TabBar tabs={tabLabels}>
                <Parameters
                  brand={'hengst'}
                  articul={'E362HD313'}
                  applicability={['BMW']}
                />
                Применимость
                <ol className='text-xs md:text-sm space-y-2 mb-3.5 list-disc'>
                  <li className='ml-5'>Доставка от 1 дня</li>
                  <li className='ml-5'>Оплата на сайте или при получении</li>
                </ol>
                <Feedbacks feedbacks={feedbacks} />
              </TabBar>
            </div>
        </div>
      </>
    );
  }
);

AnalogCard.displayName = 'AnalogCard';
