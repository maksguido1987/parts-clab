import React from 'react';
import { PageLayout } from '../../layouts';
import { AdvantagesSectionItem } from './advantages-section-item';

export interface IAdvantagesData {
  src: string;
  alt: string;
  title: string;
  text: string;
}

export const AdvantagesSection = () => {
  const renderItem = (data: IAdvantagesData, idx: number) => {
    return <AdvantagesSectionItem {...data} key={idx} />;
  };

  return (
    <PageLayout className='pt-12 pb-10'>
      <div className='text-base sm:text-2xl font-semibold mb-10 sm:mb-14'>
        Обращаясь за помощью к нам, <br /> вы получаете:
      </div>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 md:gap-x-24 sm:gap-y-7 lg:gap-y-10'>
        {advantagesData.map(renderItem)}
      </div>
    </PageLayout>
  );
};

const advantagesData: IAdvantagesData[] = [
  {
    src: '/img/static-pages/advantages-search.svg',
    alt: 'advantages-search',
    title: 'Адаптированный поиск',
    text: 'Все что нужно – ввести название детали, ее номер или уникальный код VIN. Удобный сервис поможет выбрать подходящий вариант за считанные минуты без долгих поисков',
  },
  {
    src: '/img/static-pages/advantages-message.svg',
    alt: 'advantages-message',
    title: 'Профессиональная поддержка',
    text: 'Если есть вопросы в выборе деталей, мы поможем. Специалисты подберут запчасти, которые нужны именно вашему автомобилю',
  },
  {
    src: '/img/static-pages/advantages-shield-tick.svg',
    alt: 'advantages-shield-tick',
    title: 'Оригинал и качество',
    text: 'У нас нет подделок и некачественных запчастей. Все детали – это оригиналы, поставляемые ведущими производителями. Все это подтверждено документально',
  },
  {
    src: '/img/static-pages/advantages-buy.svg',
    alt: 'advantages-buy',
    title: 'Ускоренная доставка',
    text: 'Мы работаем со всеми странами СНГ. Отправка груза осуществляется сразу после обработки заявки и подтверждения',
  },
  {
    src: '/img/static-pages/advantages-like.svg',
    alt: 'advantages-like',
    title: 'Широкий выбор',
    text: 'Ассортимент регулярно пополняется. Мы предлагаем не только новые, но и б/у запчасти от ведущих производителей. Все детали находятся в рабочем состоянии',
  },
  {
    src: '/img/static-pages/advantages-lock.svg',
    alt: 'advantages-lock',
    title: 'Безопасность',
    text: 'Обслуживаем на высоком уровне. Помогаем наладить контакт между продавцом и покупателем. ',
  },
];
