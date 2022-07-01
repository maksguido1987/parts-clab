import React from 'react';
import {
  dataCardTooltip,
  HeadingProductBage,
  LabelDetailStatus,
  ProductInfoItem,
  TooltipCategoryCard,
} from '../../../../entities';
import { useClickOutside, useToggle } from '../../../../shared/lib';
import { ICardInfoBlock } from '../../lib/product-card.interfaces';

interface IProps {
  isHorizontal: boolean;
  oem: string;
  brand: string;
  applicability: string[];
  name: string;
  // data: ICardInfoBlock;
}

export const ProductInfo: React.FC<IProps> = React.memo(
  ({ isHorizontal, /* data */ oem, brand, applicability, name }) => {
    /** Состояние отображения тултипа */
    const [isTooltip, setIsTooltip] = useToggle();
    // const { name, analogDetail, isNewDetail, brand, articul, applicability } =
    //   data;

    const onToggleTooltip = () => {
      isTooltip && setIsTooltip();
    };

    /** Отслеживает клик вне элемента */
    const categoryCardTooltipRef = useClickOutside(onToggleTooltip);

    return (
      <div className={`${isHorizontal ? 'mb-2.5 md:mb-0' : ''}`}>
        <div
          className={`${
            isHorizontal ? 'items-center' : 'justify-between'
          } mb-2 flex text-sm font-semibold`}
        >
          {name}
          <HeadingProductBage
            className={`${
              isHorizontal
                ? 'hidden'
                : 'mt-1 text-green group-hover:fill-current'
            }`}
          />
        </div>
        <div className='sm:hidden'>
          <LabelDetailStatus
            // analogDetail={}
            isNewDetail={true}
            className='mb-2'
          />
        </div>
        <ProductInfoItem name='Бренд'>{brand}</ProductInfoItem>
        <ProductInfoItem
          name='Артикул'
          isBorder
          className='relative cursor-pointer'
        >
          <span onClick={setIsTooltip} ref={categoryCardTooltipRef}>
            {oem}
            {/* {articul.length === 1 ? articul[0] : `${articul.length} артикулов`} */}
            {isTooltip && <TooltipCategoryCard dataTooltip={dataCardTooltip} />}
          </span>
        </ProductInfoItem>
        <ProductInfoItem name='Состояние'>
          <span className='rounded-full bg-green-light px-2 text-green'>
            Новый
          </span>
        </ProductInfoItem>
        <ProductInfoItem name='Применимость' isBorder className='uppercase'>
          <span className='hidden sm:inline'>
            {applicability[0]} + <span className='lowercase'>ещё</span>{' '}
            {applicability.length - 1}
          </span>
          <span className='sm:hidden'>
            {applicability.map((item, idx) => {
              return (
                <span key={idx} className='pl-2 uppercase'>
                  {item}
                </span>
              );
            })}
          </span>
        </ProductInfoItem>
      </div>
    );
  }
);

ProductInfo.displayName = 'ProductInfo';
