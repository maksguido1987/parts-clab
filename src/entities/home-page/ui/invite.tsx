import React from 'react';
import { InviteBlock } from './invite-block';
import { InviteItem } from './invite-item';
import { PageLayout } from '../../layouts';
import { IHomePageStaticData } from '../lib/interfaces';

export interface IInviteData {
  /** Основной заголовок секции приглашения к партнёрству */
  title: string;
  /** Массив данных для аккардиона */
  data: IHomePageStaticData[];
}

export const Invite = React.memo(() => {
  const renderSubItems = (item: IHomePageStaticData, idx: number) => {
    const { src, ...props } = item;
    return <InviteItem icon={src} key={idx} {...props} />;
  };

  const renderItems = (item: IInviteData, idx: number) => {
    const { title, data } = item;
    return (
      <InviteBlock key={idx} title={title}>
        {data.map(renderSubItems)}
      </InviteBlock>
    );
  };

  return (
    <PageLayout className='py-6 sm:py-10 md:py-12'>
      <div className='mx-auto'>
        <div className='sm:flex justify-between mb-7 md:mb-10'>
          <div className='lg:border-b-2 border-green lg:max-h-12 xl:max-h-14'>
            <h2 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold xl:mb-8 pb-1'>
              Приглашаем
              <br className='lg:hidden' />
              <span className='border-b-2 border-green lg:border-none'>
                {' '}
                к партнерству
              </span>
            </h2>
          </div>
          <p className='sm:w-1/2 w-full text-sm sm:text-base xl:text-lg text-blue'>
            Экономьте время и деньги на поиск покупателей если вы магазин и
            заказ автозапчастей если вы автосервис. Мы гарантируем прозрачные
            условия для наших партнеров и выгоду с первого дня.
          </p>
        </div>
        <div className='grid gap-y-10 lg:gap-y-4'>
          {inviteData.map(renderItems)}
        </div>
      </div>
    </PageLayout>
  );
});

Invite.displayName = 'Invite';

const inviteData: IInviteData[] = [
  {
    title: 'Продавцам и магазинам автозапчастей',
    data: [
      {
        title: 'Доставку автозапчастей возьмем на себя',
        src: '/img/invite/logistics.svg',
        alt: 'logistics',
        text: 'Мы полностью автоматизировали доставку в партнерстве с транспортными компаниями. После заказа курьер приедет к вам и заберет товар. Процесс доставки можно отслеживать через личный кабинет.',
      },
      {
        title: 'Продавайте огромной аудитории ',
        src: '/img/invite/hiring.svg',
        alt: 'hiring',
        text: 'Продавайте без ограничений и привязки к городу или региону. С нами о вас узнают миллионы людей по всей России и СНГ.',
      },
      {
        title: 'Загружайте товары одним файлом',
        src: '/img/invite/quality-control.svg',
        alt: 'quality-control',
        text: 'Загружайте и легко обновляйте прайсы в несколько кликов.',
      },
    ],
  },
  {
    title: 'Автосервисам и мастерам',
    data: [
      {
        title: 'Экспресс доставка в день заказа',
        src: '/img/invite/shopping.svg',
        alt: 'shopping',
        text: 'Если вам необходима деталь прямо сейчас, это не проблема. Воспользуйтесь услугой экспресс доставки и курьер привезет деталь прямо в день заказа. Больше не нужно неделями ждать доставки автозапчастей.',
      },
      {
        title: 'Огромный ассортимент автозапчастей ',
        src: '/img/invite/warehouse.svg',
        alt: 'warehouse',
        text: 'На нашей площадке широкий выбор аналогов и заменителей, вы всегда сможете подобрать качественную альтернативу.',
      },
      {
        title: 'Реклама',
        src: '/img/invite/good-review.svg',
        alt: 'good-review',
        text: 'Если вы авторизированный сервис, то мы можем рекомендовать вас для установки и ремонта деталей.',
      },
    ],
  },
];
