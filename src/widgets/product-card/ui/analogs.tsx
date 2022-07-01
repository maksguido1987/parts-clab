import React from 'react';
import { ICategoryData } from '../../../features';
import { AnalogCard, SortField } from './card-components';

interface IProps {
  cardsData: ICategoryData[];
}

export const Analogs: React.FC<IProps> = React.memo(({ cardsData }) => {
  const renderAnalogCard = (item: ICategoryData, idx: number) => {
    return <AnalogCard {...item} key={idx} />;
  };

  return (
    <div className='border-t border-gray-100 lg:border-none pt-5'>
      <div className='lg:flex items-end justify-between'>
        <div className='max-w-md mb-2.5 lg:mb-5'>
          <div className='text-sm sm:text-lg font-semibold mb-2.5'>
            20 Аналогов для детали «Масляный фильтр»
          </div>
          <div className='text-xs sm:text-sm lg:text-base text-gray-400'>
            Система автоматически подобрала детали других брендов, подходящие
            вашему автомобилю
          </div>
        </div>
        <div className='flex justify-end'>
          <SortField />
        </div>
      </div>
      <hr className='border-gray-100 mb-4' />
      {cardsData.map(renderAnalogCard)}
    </div>
  );
});

Analogs.displayName = 'Analogs';
