import React from 'react';
import { Feedbacks, SelectElement, TabBar } from '../../../entities';
import { feedbacks, prices, tabLabels } from '../lib/static-data';
import {
  Parameters,
  Sellers,
} from './card-components';

export const ProductInfo = React.memo(() => {
  return (
    <div className='mb-12'>
      <div className='sm:hidden'>
        <SelectElement
          title='Параметры'
          className='text-sm mb-3'
          widthIcon={14}
          heightIcon={14}
        >
          <Parameters
            brand={'hengst'}
            articul={'E362HD313'}
            applicability={['BMW']}
          />
        </SelectElement>
        <SelectElement
          title='Применимость'
          className='text-sm mb-3'
          widthIcon={14}
          heightIcon={14}
        >
          Применимость
        </SelectElement>
        <SelectElement
          title='Доставка и оплата'
          className='text-sm mb-3'
          widthIcon={14}
          heightIcon={14}
        >
          <ol className='text-xs md:text-sm space-y-2 list-disc mb-[25px]'>
            <li className='ml-5'>Доставка от 1 дня</li>
            <li className='ml-5'>Оплата на сайте или при получении</li>
          </ol>
        </SelectElement>
        <SelectElement
          title='Отзывы о товарах'
          className='text-sm mb-3'
          widthIcon={14}
          heightIcon={14}
        >
          <Feedbacks feedbacks={feedbacks} />
        </SelectElement>
        <SelectElement
          title='Цены'
          className='text-sm mb-3'
          widthIcon={14}
          heightIcon={14}
        >
          <Sellers
            prices={prices}
            tradeOffers={16}
            partName='filtron OE672/7A'
          />
        </SelectElement>
      </div>
      <div className='hidden sm:block lg:hidden'>
        <Sellers prices={prices} tradeOffers={16} partName='filtron OE672/7A' />
      </div>
      <TabBar tabs={tabLabels} className='hidden sm:block text-sm'>
        <Parameters
          brand={'hengst'}
          articul={'E362HD313'}
          applicability={['BMW']}
        />
        Применимость
        <ol className='text-xs md:text-sm space-y-2 mb-3.5 list-disc'>
          <li className='ml-5'>Доставка от 1 дня</li>
          <li className='ml-5'>Оплата на сайте или при получении</li>
        </ol>
        <Feedbacks feedbacks={feedbacks} />
      </TabBar>
    </div>
  );
});

ProductInfo.displayName = 'ProductInfo';
