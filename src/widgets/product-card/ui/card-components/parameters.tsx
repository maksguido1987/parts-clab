import React from 'react';
import { ProductInfoItem } from '../../../../entities';

interface IProps {
  /** Бренд товара */
  brand: string;
  /** Артикул */
  articul: string;
  /** Применимость (на какие автомобили) */
  applicability: string[];
}

export const Parameters: React.FC<IProps> = React.memo(
  ({ brand, articul, applicability }) => {
    return (
      <div className='mb-[25px]'>
        <ProductInfoItem name='Бренд'>{brand}</ProductInfoItem>
        <ProductInfoItem name='Артикул' className='cursor-pointer relative'>
          <span>{articul}</span>
        </ProductInfoItem>
        <ProductInfoItem name='Состояние'>
          <span className=''>
            Новый
          </span>
        </ProductInfoItem>
        <ProductInfoItem name='Применимость' isBorder className='uppercase'>
          <span className='sm:inline hidden'>
            {applicability[0]} + <span className='lowercase'>ещё</span>{' '}
            {applicability.length - 1}
          </span>
          <span className='sm:hidden'>
            {applicability.map((item, idx) => (
              <span key={idx} className='pl-2 uppercase'>
                {item}
              </span>
            ))}
          </span>
        </ProductInfoItem>
      </div>
    );
  }
);

Parameters.displayName = 'Parameters';
