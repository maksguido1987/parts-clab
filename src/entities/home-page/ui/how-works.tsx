import { HowWorksItem } from './how-works-item';
import { PageLayout } from '../../layouts';
import { IHomePageStaticData } from '../lib/interfaces';

export const HowWorks = () => {
  const renderItems = (item: IHomePageStaticData, idx: number) => {
    const { title, text, src, alt } = item;

    return (
      <HowWorksItem key={idx} alt={alt} src={src} title={title} text={text} />
    );
  };

  return (
    <PageLayout className='py-6 sm:py-10 md:py-12'>
      <h2 className='lg:text-4xl md:text-2xl text-xl font-semibold lg:mb-5 sm:mb-3 mb-2  md:w-full w-36'>
        Как работает маркетплейс
      </h2>
      <p className='md:text-lg sm:text-base text-sm text-blue mb-7 md:mb-10'>
        Это просто. Всего три шага
      </p>
      <div className='lg:py-12 md:py-10 sm:px-5 px-3 py-5 border border-gray-200 rounded-2xl'>
        <div className='flex flex-col sm:flex-row sm:items-start items-center justify-between'>
          {howWorksData.map(renderItems)}
        </div>
      </div>
    </PageLayout>
  );
};

/** Данные для отображения карточек с описанием работы маркетплейса */
const howWorksData: IHomePageStaticData[] = [
  {
    title: 'Просто найдите',
    src: '/img/how-work/how-search.svg',
    alt: 'how-search',
    text: 'Найдите нужную деталь на свой автомобиль с помощью умного поиска или через форму помощи в выборе детали по вин–номеру',
  },
  {
    title: 'Удобно выберите',
    src: '/img/how-work/how-choice.svg',
    alt: 'how-choice',
    text: 'Выберите из списка совместимых с вашим авто деталей по качеству, состоянию, стоимости, сроку доставки и рейтингу продавца.',
  },
  {
    title: 'Быстро получите',
    src: '/img/how-work/how-settings.svg',
    alt: 'how-settings',
    text: 'Оформите заказ и ждите курьера. Если деталь будет не соответствовать описанию или будут нарушены условия доставки, мы вернем деньги.',
  },
];
