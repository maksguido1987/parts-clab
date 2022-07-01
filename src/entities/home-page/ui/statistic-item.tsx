import React from 'react';

interface IProps {
  /** Значение статистики */
  value: number;
  /** Категория статистики */
  name: string;
}

export const StatisticItem: React.FC<IProps> = React.memo(({ value, name }) => {
  return (
    <div className='flex flex-col text-white'>
      <span className='text-3xl md:text-40px lg:text-6xl font-semibold mb-0.5 md:mb-3'>
        {value}
      </span>
      <span className='text-sm md:text-base lg:text-lg'>{name}</span>
    </div>
  );
});

StatisticItem.displayName = 'StatisticItem';
