import React from 'react';

export interface IDataTooltip {
  /** Артикул товара */
  articul: string;
  /** Количество предложений */
  offers: number;
  /** Минимальная цена из всех предложений */
  minPrice: number;
  /** Максимальная цена из всех предложений */
  maxPrice: number;
}

interface IProps {
  dataTooltip: IDataTooltip[];
}

export const TooltipCategoryCard: React.FC<IProps> = ({ dataTooltip }) => {
  const renderItem = (item: IDataTooltip, idx: number) => {
    const { articul, offers, minPrice, maxPrice } = item;
    return (
      <div
        className='text-sm border-b border-dashed border-green sm:space-x-4 space-x-0 flex flex-col sm:flex-row max-w-max group w-[355px]'
        key={idx}
      >
        <div
          onClick={() => console.log('Переводит на деталь')}
          className=' group-hover:text-green transition'
        >
          {articul}
        </div>
        <div
          onClick={() => console.log('Переводит на все товары')}
          className='text-xs text-gray-400 group-hover:text-green transition'
        >
          {offers} предложений
        </div>
        <div
          onClick={() => console.log('Показывает все цены')}
          className='font-bold group-hover:text-green transition'
        >
          От {minPrice} ₽ до {maxPrice} ₽
        </div>
      </div>
    );
  };

  return (
    <div className='px-3 absolute z-10 top-7'>
      <div className='bg-white rounded-b-md rounded-tr-md shadow-tooltipCard p-3.5 sm:space-y-4 space-y-2'>
        {dataTooltip && dataTooltip.map(renderItem)}
      </div>
    </div>
  );
};
