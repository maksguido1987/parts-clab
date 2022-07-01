import React from 'react';
import { Button, FavoriteBadge } from '../../../../entities';
import { useToggle } from '../../../../shared/lib';
import btnArrow from '../../../../../public/img/buttons-img/arrow.svg';
import greenArrowBtn from '../../../../../public/img/buttons-img/green-arrow.svg';

interface IProps {
  isHorizontal: boolean;
  price: number;
}

export const CategoryButtons: React.FC<IProps> = React.memo(
  ({ isHorizontal, price }) => {
    /** Состояние закладки, false - не отмечена, true - товар отмечен */
    const [markProduct, setMarkProduct] = useToggle();

    return (
      <div
        className={`flex justify-end ${
          isHorizontal ? 'items-center sm:justify-start md:justify-end mt-2.5 md:mt-0' : 'items-end'
        }`}
      >
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
          className={`${isHorizontal ? 'mr-2.5' : ''} text-sm whitespace-nowrap`}
          name={`Купить за ${price} ₽`}
          isImage
          src={btnArrow}
          onClick={() => {}}
        />
        {isHorizontal && (
          <Button
            size='small-btn'
            color='white'
            className='text-sm whitespace-nowrap sm:block hidden'
            name='Подробнее'
            isImage
            src={greenArrowBtn}
            onClick={() => {}}
          />
        )}
      </div>
    );
  }
);

CategoryButtons.displayName = 'CategoryButtons';
