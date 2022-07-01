import React from 'react';
import Link from 'next/link';
import { BenefistItem } from './benefist-item';
import { PageLayout } from '../../layouts';
import { IHomePageStaticData } from '../lib/interfaces';

export const Benefists = () => {
  const renderItems = (item: IHomePageStaticData, idx: number) => {
    return <BenefistItem key={idx} {...item} />;
  };

  return (
    <PageLayout className='py-6 sm:py-10 md:py-12'>
      <div className='max-w-full mx-auto'>
        <div className='w-60 md:w-full'>
          <h2 className='text-xl md:text-3xl lg:text-4xl font-semibold w-40 md:w-max mb-2.5 md:mb-4 lg:mb-9'>
            Оцените преимущества
          </h2>
          <p className='text-sm md:text-base lg:text-lg text-blue mb-7 md:mb-10 md:w-[400px] lg:w-[568px'>
            Мы позаботились о том, чтобы работа с сервисом была максимально
            <Link href='/'>
              <a className='text-green'> удобна и безопасна</a>
            </Link>
            .
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-12 lg:gap-y-8 justify-items-center'>
          {benefistsData.map(renderItems)}
        </div>
      </div>
    </PageLayout>
  );
};

/** Массив данных для отображения карточек в секции преимуществ */
export const benefistsData: IHomePageStaticData[] = [
  {
    title: 'Умный поиск деталей на ваш авто',
    src: '/img/benefists/benefis-search.svg',
    alt: 'benefis-search',
    text: 'Умная и простая система поиска проведет вас за руку от поиска и до покупки детали в несколько кликов',
  },
  {
    title: 'Быстрая помощь в подборе деталей',
    src: '/img/benefists/benefis-help.svg',
    alt: 'benefis-help',
    text: 'Когда нет времени искать или нужна точность при подборе сложных деталей наши специалисты помогут вам это сделать',
  },
  {
    title: 'Оригинальные детали и аналоги',
    src: '/img/benefists/benefis-parts.svg',
    alt: 'benefis-parts',
    text: 'На нашей площадке широкий выбор производителей, от оригинальных до самых доступных аналогов',
  },
  {
    title: 'Продажа и доставка по России и СНГ',
    src: '/img/benefists/benefis-tracking.svg',
    alt: 'benefis-tracking',
    text: 'Мы доставим детали в самый кратчайший сбор по всей России и странам СНГ удобным для вас способом',
  },
  {
    title: 'Выбор среди новых и БУ деталей',
    src: '/img/benefists/benefis-new-by.svg',
    alt: 'benefis-new-by',
    text: 'У нас вы найдете широкий выбор новых и Б/У деталей с подробным описаныем',
  },
  {
    title: 'Гарантия безопасной сделки',
    src: '/img/benefists/benefis-garatn.svg',
    alt: 'benefis-garatn',
    text: 'Мы выступаем гарантом всех сделок и к нашим продавцам предъявляем самые высокие стандарты качества и обслуживания',
  },
];
