import React from 'react';
import { CardWrapper, ShopButtons, ShopPriceInfo } from '../../../entities';
import { ICategoryDetails } from '../../../shared/interfaces';
import { useToggle } from '../../../shared/lib';
import { ICategoryData } from '../lib';
import {
  CardCarousel,
  CategoryButtons,
  InfoCardWrapper,
  PriceInfo,
  ProductInfo,
} from './card-components';

interface IProps {
  isHorizontal: boolean;
  isShop?: boolean;
  data: ICategoryDetails;
}

export const CategoryCard: React.FC<IProps> = React.memo(
  ({ isHorizontal, isShop = false, data }) => {
    const {
      // images,
      // minPrice,
      // maxPrice,
      // sellersCount,
      // partsCount,
      // price,
      // seller,
      brand,
      id,
      name,
      oem,
      slug,
    } = data;
    /** Состояние закладки, false - не отмечена, true - товар отмечен */
    const [favorite, setFavorite] = useToggle();
    /** Состояние корзины. Товар в корзине, либо нет */
    const [cart, setCart] = useToggle();

    const handleFavorite = (e: React.MouseEvent) => {
      e.stopPropagation();
      setFavorite();
    };

    const handleCart = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCart();
    };

    return (
      <CardWrapper isHorizontal={isHorizontal}>
        {/** Блок со слайдером */}
        <CardCarousel isHorizontal={isHorizontal} images={[]} />
        <div
          className={`${
            isHorizontal ? 'w-full' : 'grow'
          } flex flex-col justify-between`}
        >
          <InfoCardWrapper isHorizontal={isHorizontal}>
            <div
              className={`${
                isHorizontal ? 'mb-1.5 grow justify-between md:flex' : ''
              }`}
            >
              <ProductInfo
                isHorizontal={isHorizontal}
                oem={oem}
                brand={brand}
                name={name}
                applicability={[
                  'FIAT',
                  'LANCIA',
                  'fiat professional',
                ]}
              />
              {isShop ? (
                <ShopPriceInfo
                  price={1453}
                  partsCount={12}
                  seller={'На Нагорной'}
                />
              ) : (
                <PriceInfo
                  minPrice={458}
                  maxPrice={3245}
                  sellersCount={3}
                  partsCount={12}
                  isHorizontal={isHorizontal}
                />
              )}
            </div>
          </InfoCardWrapper>
          {isShop ? (
            <ShopButtons
              favorite={favorite}
              cart={cart}
              handleFavorite={handleFavorite}
              handleCart={handleCart}
              isHorizontal={isHorizontal}
            />
          ) : (
            <CategoryButtons isHorizontal={isHorizontal} price={154} />
          )}
        </div>
      </CardWrapper>
    );
  }
);

CategoryCard.displayName = 'CategoryCard';
