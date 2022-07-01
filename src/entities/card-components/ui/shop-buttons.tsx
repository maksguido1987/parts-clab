import React from 'react';
import {
  AnalogsBtn,
  Button,
  CartBage,
  DetailedBtn,
  FavoriteBadge,
} from '../..';
import btnArrow from '../../../../public/img/buttons-img/arrow.svg';

interface IProps {
  /** Флаг для карточки товара (разворачивается) */
  open?: boolean;
  /** Флаг для карточки категорий (вертикальное либо горизонтальное расположение) */
  isHorizontal?: boolean;
  /** Статус, добавлена ли деталь в закладки */
  favorite: boolean;
  handleFavorite: (e: React.MouseEvent) => void;
  /** Статус, добавлена ли деталь в корзину */
  cart: boolean;
  handleCart: (e: React.MouseEvent) => void;
}

export const ShopButtons: React.FC<IProps> = React.memo(
  ({
    open = false,
    isHorizontal = true,
    favorite,
    cart,
    handleFavorite,
    handleCart,
  }) => {
    return (
      <div
        className={`${
          open ? 'sm:justify-start' : 'md:justify-end'
        } flex items-center justify-end sm:justify-start mt-2.5 md:mt-0 transition-all duration-300`}
      >
        {/** ======В избранное====== */}
        <div className='flex space-x-3 items-end justify-end'>
          <div
            className={`${
              isHorizontal ? 'sm:w-[42px] sm:h-[42px]' : ''
            } w-9 h-9 border border-gray-200 rounded-md flex items-center justify-center cursor-pointer transition hover:border-green`}
            onClick={handleFavorite}
          >
            <FavoriteBadge
              color='#5DC563'
              width={12}
              height={12}
              className={`${favorite ? 'fill-current text-green' : ''} ${
                isHorizontal ? 'sm:w-[16px] sm:h-[16px]' : ''
              }`}
            />
          </div>
          {/** ======Корзина====== */}
          <div
            className={`${
              cart
                ? 'border border-gray-200 hover:border-green'
                : 'bg-green hover:bg-green-hover'
            } ${
              isHorizontal ? 'sm:hidden' : ''
            } w-9 h-9 rounded-md flex items-center justify-center cursor-pointer transition`}
            onClick={handleCart}
          >
            <CartBage
              color={`${cart ? '#5DC563' : '#ffffff'}`}
              className={`${cart ? 'fill-current text-green' : ''}`}
            />
          </div>
          {/** Кнопка купить. На планшетах вместо корзины */}
          <Button
            size='small-btn'
            className={`${
              isHorizontal ? 'sm:block' : ''
            } text-sm whitespace-nowrap mr-2.5 hidden`}
            name={`${open ? 'Добавить в корзину' : 'Купить'}`}
            isImage
            src={btnArrow}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
            }}
          />
          {open ? (
            <DetailedBtn
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
              }}
            />
          ) : (
            <AnalogsBtn
              isHorizontal={isHorizontal}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
              }}
            />
          )}
        </div>
      </div>
    );
  }
);

ShopButtons.displayName = 'ShopButtons';
