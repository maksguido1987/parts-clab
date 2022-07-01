import React from 'react';
import { feedbacks } from '../../../../widgets';
import { Feedbacks } from '../../../feedback';
import { PageLayout } from '../../../layouts';
import { ITab, TabBar } from '../../../tab-bar';
import { IRatingPointProps } from './rating-point';
import { SellerRating } from './seller-rating';

export const SellerInfo = () => {
  return (
    <PageLayout className='mb-10 sm:mb-[60px]'>
      <TabBar tabs={sellerTabs} page='shop' className='text-xs sm:text-base'>
        <SellerRating ratingPoints={ratingPoints}>  
          <div className='text-blue text-[10px] sm:text-sm space-x-6 mt-2 sm:mt-2.5'>
            <span>22 оценки</span>
            <span>7 отзывов</span>
            <span>91 заказ</span>
          </div>
        </SellerRating>
        <Feedbacks feedbacks={feedbacks} />
        <div>Контакты</div>
      </TabBar>
    </PageLayout>
  );
};

const sellerTabs: ITab[] = [
  { label: 'О продавце' },
  { label: 'Отзывы' },
  { label: 'Контакты' },
];

const ratingPoints: IRatingPointProps[] = [
  {
    title: 'Рейтинг магазина:',
    done: 87,
  },
  {
    title: 'Вежливость сотрудников:',
    done: 86,
  },
  {
    title: 'Срок передачи в доставку',
    done: 89,
  },
  {
    title: 'Описание товара',
    done: 86,
  },
  {
    title: 'Стоимость товара',
    done: 89,
  },
];
