import React from 'react';
import { HorizontalCardsIcon, VerticalCardsIcon } from '../../../../entities';
import { CardsPositionItem } from './cards-position-item';

interface IProps {
  /** Расположение карточек поиска, если true, горизонтальное, иначе плитка */
  isHorizontal: boolean;
  /** Функция изменения состояния отображения карточек на горизонтальное отображение */
  onSetIsHorisontal: (value: boolean) => void;
  /** Функция изменения состояния отображения карточек на вертикальное отображение */
  onSetIsVertical: (value: boolean) => void;
}

export const CardsPosition: React.FC<IProps> = React.memo(
  ({ isHorizontal, onSetIsHorisontal, onSetIsVertical }) => {
    return (
      <div className='flex'>
        <CardsPositionItem
          onClick={() => onSetIsHorisontal(true)}
          className={`${
            isHorizontal
              ? 'bg-green hover:bg-green-hover'
              : 'bg-gray-100 hover:bg-gray-200'
          } transition`}
        >
          <HorizontalCardsIcon
            className={`${isHorizontal ? 'fill-current text-white' : ''}`}
          />
        </CardsPositionItem>
        <CardsPositionItem
          onClick={() => onSetIsVertical(false)}
          className={`${
            !isHorizontal
              ? 'bg-green hover:bg-green-hover'
              : 'bg-gray-100 hover:bg-gray-200'
          } transition`}
        >
          <VerticalCardsIcon
            className={`${!isHorizontal ? 'fill-current text-white' : ''}`}
          />
        </CardsPositionItem>
      </div>
    );
  }
);

CardsPosition.displayName = 'CardsPosition';
