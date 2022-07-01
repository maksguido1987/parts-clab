import React from 'react';
import { PageLayout } from '../../layouts';
import { FaqAnswersItem } from './faq-answers-item';

export interface IFaqAnswersData {
  title: string;
  description: string;
}

export const FaqAnswers = () => {
  return (
    <PageLayout className='my-10 md:my-14 max-w-[920px] mx-auto'>
      <div className='text-xl sm:text-[28px] lg:text-[34px] font-semibold text-center mb-3.5'>Ответы на вопросы</div>
      {faqAnswersData.map((item, idx) => {
        return (
          <FaqAnswersItem
            key={idx}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </PageLayout>
  );
};

const faqAnswersData: IFaqAnswersData[] = [
  {
    title: 'Поиск детали',
    description:
      'Искать деталь можно, по индивидуальному номеру или марке автомобиля. Подробная инструкция представлена на видео «Как выбрать товар».',
  },
  {
    title: 'Отслеживание товара',
    description:
      'Искать деталь можно, по индивидуальному номеру или марке автомобиля. Подробная инструкция представлена на видео «Как выбрать товар».',
  },
  {
    title: 'Подойдет ли деталь',
    description:
      'Искать деталь можно, по индивидуальному номеру или марке автомобиля. Подробная инструкция представлена на видео «Как выбрать товар».',
  },
  {
    title: 'Товар есть в наличии?',
    description:
      'Искать деталь можно, по индивидуальному номеру или марке автомобиля. Подробная инструкция представлена на видео «Как выбрать товар».',
  },
  {
    title: 'Сроки доставки',
    description:
      'Искать деталь можно, по индивидуальному номеру или марке автомобиля. Подробная инструкция представлена на видео «Как выбрать товар».',
  },
];
