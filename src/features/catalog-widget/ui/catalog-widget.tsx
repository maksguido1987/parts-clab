import React from 'react';
import { CatalogWidgetItem } from './catalog-widget-item';
import {
  catalogWidgetItems,
  ICatalogWidgetItem,
} from '../lib/catalog-widget-items';
import { PageLayout } from '../../../entities';

interface IProps {
  /** Общее количество товаров */
  countOffers: number;
}

export const CatalogWidget: React.FC<IProps> = ({ countOffers }) => {
  const renderItems = (item: ICatalogWidgetItem, idx: number) => {
    const isLast = catalogWidgetItems.length - 1 === idx;

    return isLast ? (
      <CatalogWidgetItem key={idx} isLast {...item} />
    ) : (
      <CatalogWidgetItem key={idx} {...item} />
    );
  };

  return (
    <PageLayout className='bg-white pt-12 pb-6 sm:pt-8 sm:pb-10 md:pt-20 md:pb-12'>
      <div className='flex items-center mb-8'>
        <h2 className='md:text-4xl text-xl font-semibold mr-4'>Автозапчасти</h2>
        <span className='text-gray-300 font-thin md:text-base text-xs transform translate-y-1'>
          {countOffers.toLocaleString()} товаров
        </span>
      </div>
      <div className='grid items-start lg:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-y-7 md:gap-y-10 lg:gap-x-6 md:gap-x-5 gap-x-3'>
        {catalogWidgetItems.map(renderItems)}
      </div>
    </PageLayout>
  );
};
